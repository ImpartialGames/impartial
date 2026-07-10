import { PassThrough } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import type { HelmetServerState } from "react-helmet-async";
import { AppInner } from "./App";

export { PUBLIC_PATHS } from "./seo/public-paths";
export { ressourcesArticles } from "./data/ressources";

export interface RenderResult {
  appHtml: string;
  helmet: HelmetServerState;
}

/** Rend une URL publique en HTML complet (attend les chunks lazy via onAllReady). */
export function render(url: string): Promise<RenderResult> {
  const helmetContext: { helmet?: HelmetServerState } = {};

  return new Promise<RenderResult>((resolve, reject) => {
    const { pipe } = renderToPipeableStream(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppInner />
        </StaticRouter>
      </HelmetProvider>,
      {
        onAllReady() {
          const sink = new PassThrough();
          let html = "";
          sink.on("data", (chunk) => (html += chunk));
          sink.on("end", () => resolve({ appHtml: html, helmet: helmetContext.helmet! }));
          pipe(sink);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          // Erreur non fatale pendant le streaming : on la journalise, le shell décidera.
          console.error(`[prerender] erreur de rendu sur ${url}:`, error);
        },
      },
    );
  });
}
