export function MoleculeBg({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="mol-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#780018" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1e0d10" stopOpacity="0.08" />
        </linearGradient>
      </defs>
      <g stroke="url(#mol-g)" strokeWidth="1.2">
        <circle cx="120" cy="140" r="14" fill="currentColor" className="text-brand/30" />
        <circle cx="200" cy="100" r="10" fill="currentColor" className="text-ink-800/25" />
        <circle cx="260" cy="160" r="12" fill="currentColor" className="text-brand/25" />
        <line x1="120" y1="140" x2="200" y2="100" />
        <line x1="200" y1="100" x2="260" y2="160" />
        <line x1="120" y1="140" x2="260" y2="160" />
        <circle cx="520" cy="420" r="16" fill="currentColor" className="text-ink-800/20" />
        <circle cx="600" cy="380" r="11" fill="currentColor" className="text-brand/22" />
        <circle cx="660" cy="440" r="13" fill="currentColor" className="text-ink-800/18" />
        <line x1="520" y1="420" x2="600" y2="380" />
        <line x1="600" y1="380" x2="660" y2="440" />
        <line x1="520" y1="420" x2="660" y2="440" />
        <circle cx="640" cy="120" r="9" fill="currentColor" className="text-brand/18" />
        <circle cx="700" cy="180" r="11" fill="currentColor" className="text-ink-800/15" />
        <line x1="640" y1="120" x2="700" y2="180" />
      </g>
    </svg>
  );
}
