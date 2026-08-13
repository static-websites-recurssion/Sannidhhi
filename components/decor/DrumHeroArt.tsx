/** Stylized industrial drums — vector, no external image (fast LCP) */
export function DrumHeroArt({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 720 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="drum-metal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e9e4" />
          <stop offset="45%" stopColor="#d8c6bb" />
          <stop offset="100%" stopColor="#a3877a" />
        </linearGradient>
        <linearGradient id="drum-band" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e0d10" />
          <stop offset="50%" stopColor="#8b4a26" />
          <stop offset="100%" stopColor="#1e0d10" />
        </linearGradient>
        <linearGradient id="drum-red" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#780018" />
          <stop offset="100%" stopColor="#94102a" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="360" cy="400" rx="280" ry="28" fill="#1e0d10" opacity="0.12" />
      <g filter="url(#soft)">
        <g transform="translate(80 60)">
          <ellipse cx="140" cy="52" rx="78" ry="22" fill="url(#drum-metal)" />
          <path
            d="M62 52v260c0 12 35 22 78 22s78-10 78-22V52"
            fill="url(#drum-metal)"
            stroke="#9c7f70"
            strokeWidth="1"
          />
          <ellipse cx="140" cy="312" rx="78" ry="22" fill="#b59c8e" />
          <rect x="85" y="120" width="110" height="36" rx="4" fill="url(#drum-band)" opacity="0.92" />
          <rect x="95" y="200" width="90" height="14" rx="3" fill="url(#drum-red)" opacity="0.9" />
        </g>
        <g transform="translate(300 30)">
          <ellipse cx="140" cy="52" rx="78" ry="22" fill="url(#drum-metal)" />
          <path
            d="M62 52v280c0 12 35 22 78 22s78-10 78-22V52"
            fill="url(#drum-metal)"
            stroke="#9c7f70"
            strokeWidth="1"
          />
          <ellipse cx="140" cy="332" rx="78" ry="22" fill="#b59c8e" />
          <rect x="85" y="130" width="110" height="48" rx="4" fill="url(#drum-red)" opacity="0.88" />
          <rect x="100" y="220" width="80" height="10" rx="2" fill="#1e0d10" opacity="0.35" />
        </g>
        <g transform="translate(500 80)">
          <ellipse cx="100" cy="42" rx="58" ry="16" fill="url(#drum-metal)" />
          <path
            d="M42 42v200c0 10 26 18 58 18s58-8 58-18V42"
            fill="url(#drum-metal)"
            stroke="#9c7f70"
            strokeWidth="1"
          />
          <ellipse cx="100" cy="242" rx="58" ry="16" fill="#b59c8e" />
          <rect x="58" y="110" width="84" height="28" rx="3" fill="url(#drum-band)" opacity="0.9" />
        </g>
      </g>
    </svg>
  );
}
