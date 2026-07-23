export function ComingSoonIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 260" className={className} role="img" aria-label="Illustration of a calendar and a growing plant">
      <defs>
        <linearGradient id="calGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--emerald)" />
          <stop offset="100%" stopColor="var(--emerald-dark)" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="235" rx="120" ry="14" fill="var(--border)" opacity="0.5" />

      {/* Calendar body */}
      <rect x="70" y="60" width="180" height="150" rx="18" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
      <rect x="70" y="60" width="180" height="42" rx="18" fill="url(#calGrad)" />
      <rect x="70" y="86" width="180" height="16" fill="url(#calGrad)" />
      <rect x="100" y="42" width="10" height="34" rx="5" fill="var(--gold)" />
      <rect x="210" y="42" width="10" height="34" rx="5" fill="var(--gold)" />

      {/* Grid dots representing dates */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={92 + col * 30}
            y={118 + row * 22}
            width="18"
            height="14"
            rx="4"
            fill={row === 2 && col === 2 ? 'var(--gold)' : 'var(--emerald-light)'}
          />
        ))
      )}

      {/* Small growing plant beside the calendar, symbolizing progress/future */}
      <path d="M270 210 C270 190 258 178 258 160" stroke="var(--emerald)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M258 168 C248 160 244 150 248 142 C258 148 260 158 258 168 Z" fill="var(--emerald)" />
      <path d="M258 178 C268 172 274 162 270 154 C260 158 256 168 258 178 Z" fill="var(--emerald-dark)" />
      <ellipse cx="270" cy="212" rx="20" ry="6" fill="var(--border)" opacity="0.6" />

      {/* Clock accent */}
      <circle cx="60" cy="150" r="22" fill="var(--gold-light)" stroke="var(--gold)" strokeWidth="2" />
      <line x1="60" y1="150" x2="60" y2="138" stroke="var(--charcoal)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="60" y1="150" x2="69" y2="153" stroke="var(--charcoal)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
