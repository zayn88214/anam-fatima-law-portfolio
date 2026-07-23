export function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-perspective">
        <span className="ambient-ring ambient-ring-a"><i /><i /></span>
        <span className="ambient-ring ambient-ring-b"><i /><i /></span>
        <span className="ambient-depth-card ambient-depth-card-a" />
        <span className="ambient-depth-card ambient-depth-card-b" />
        <span className="ambient-orb ambient-orb-a" />
        <span className="ambient-orb ambient-orb-b" />
        <span className="ambient-cube">
          <i className="ambient-face ambient-face-front" />
          <i className="ambient-face ambient-face-back" />
          <i className="ambient-face ambient-face-right" />
          <i className="ambient-face ambient-face-left" />
          <i className="ambient-face ambient-face-top" />
          <i className="ambient-face ambient-face-bottom" />
        </span>
      </div>
    </div>
  );
}
