export function MandalaLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="18" stroke="#C5A059" strokeWidth="0.75" />
      <circle cx="20" cy="20" r="12" stroke="#C5A059" strokeWidth="0.5" />
      <circle cx="20" cy="20" r="6" stroke="#C5A059" strokeWidth="0.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="20"
          y1="20"
          x2={20 + 18 * Math.cos((angle * Math.PI) / 180)}
          y2={20 + 18 * Math.sin((angle * Math.PI) / 180)}
          stroke="#C5A059"
          strokeWidth="0.5"
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={angle}
          cx={20 + 12 * Math.cos((angle * Math.PI) / 180)}
          cy={20 + 12 * Math.sin((angle * Math.PI) / 180)}
          r="1.5"
          fill="#C5A059"
        />
      ))}
    </svg>
  );
}

export function LotusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C10 8 6 10 4 12c2 0 5 1 8 3 3-2 6-3 8-3-2-2-6-4-8-9z" stroke="#C5A059" strokeWidth="1" fill="none" />
      <path d="M12 8c-1 3-3 5-5 6 1.5 0 3 .5 5 2 2-1.5 3.5-2 5-2-2-1-4-3-5-6z" stroke="#C5A059" strokeWidth="0.75" fill="none" />
      <path d="M12 14v7" stroke="#C5A059" strokeWidth="0.75" />
    </svg>
  );
}

export function ArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-2.5 h-2.5 shrink-0 ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function QuoteIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20c0-4 2-8 6-10l2 3c-2 1-3 3-3 5h5v8H8v-6zM22 20c0-4 2-8 6-10l2 3c-2 1-3 3-3 5h5v8h-10v-6z" fill="#C5A059" opacity="0.6" />
    </svg>
  );
}
