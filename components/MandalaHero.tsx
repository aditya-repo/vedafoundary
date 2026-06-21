export default function MandalaHero() {
  const spokes = 24;
  const rings = [80, 65, 50, 35, 20];

  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {Array.from({ length: spokes }).map((_, i) => {
        const angle = (i * 360) / spokes;
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={`spoke-${i}`}
            x1="250"
            y1="250"
            x2={250 + 230 * Math.cos(rad)}
            y2={250 + 230 * Math.sin(rad)}
            stroke="#C5A059"
            strokeWidth="0.4"
            opacity="0.5"
          />
        );
      })}
      {rings.map((r) => (
        <circle key={r} cx="250" cy="250" r={r} stroke="#C5A059" strokeWidth="0.6" opacity="0.7" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 250 + 65 * Math.cos(angle);
        const y = 250 + 65 * Math.sin(angle);
        return (
          <g key={`node-${i}`}>
            <circle cx={x} cy={y} r="4" fill="#C5A059" opacity="0.8" />
            <circle cx={x} cy={y} r="8" stroke="#C5A059" strokeWidth="0.5" opacity="0.4" />
          </g>
        );
      })}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 250 + 50 * Math.cos(angle);
        const y1 = 250 + 50 * Math.sin(angle);
        const x2 = 250 + 200 * Math.cos(angle);
        const y2 = 250 + 200 * Math.sin(angle);
        return (
          <g key={`circuit-${i}`}>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C5A059" strokeWidth="0.5" opacity="0.4" strokeDasharray="4 6" />
            <rect
              x={x2 - 6}
              y={y2 - 6}
              width="12"
              height="12"
              stroke="#C5A059"
              strokeWidth="0.5"
              fill="none"
              opacity="0.6"
              transform={`rotate(${i * 45} ${x2} ${y2})`}
            />
          </g>
        );
      })}
      <circle cx="250" cy="250" r="15" stroke="#C5A059" strokeWidth="1" />
      <circle cx="250" cy="250" r="8" fill="#C5A059" opacity="0.3" />
      {[0, 72, 144, 216, 288].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const px = 250 + 35 * Math.cos(rad);
        const py = 250 + 35 * Math.sin(rad);
        return (
          <polygon
            key={angle}
            points={`${px},${py - 6} ${px + 5},${py + 4} ${px - 5},${py + 4}`}
            stroke="#C5A059"
            strokeWidth="0.5"
            fill="none"
            opacity="0.7"
          />
        );
      })}
    </svg>
  );
}
