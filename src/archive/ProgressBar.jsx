function ProgressBar({ value, max, position }) {
  const percent = Math.min((value / max) * 100, 100);

  const containerClass =
    position === "right"
      ? "progress-container right"
      : "progress-container left";

  return (
    <div className={containerClass}>
      <div className="progress-number">{value}</div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ height: `${percent}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
