/** Mini-courbe décorative (carte métrique, mockup téléphone…). */
export function Sparkline({
  stroke = "rgba(255,255,255,0.22)",
  dotColor = "#818CF8",
  d = "M2 24 C 30 22, 55 18, 78 12 S 112 4, 118 3",
  className = "w-full h-6 mt-4",
}: {
  stroke?: string;
  dotColor?: string;
  d?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 120 28" className={className} aria-hidden fill="none">
      <path d={d} stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="118" cy="3" r="2.5" fill={dotColor} />
    </svg>
  );
}
