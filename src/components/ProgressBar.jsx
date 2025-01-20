const SEGMENTS = 5;
const SEGMENT_SIZE = 10;
const BARS = SEGMENTS * SEGMENT_SIZE;

function ProgressBar({ value, max, position, icon }) {
  const percent = Math.min((value / max) * 100, 100);

  const containerClass =
    position === "right"
      ? "progress-container right"
      : "progress-container left";

  const filledBars = Math.floor((percent * BARS) / 100);

  return (
    <div className={containerClass}>
      <img src={icon} className="progress-icon" />
      <div className="progress-bar-container">
        {Array.from({ length: SEGMENTS }).map((_, segmentIndex) => {
          return (
            <div key={segmentIndex} className="progress-bar-segment">
              {Array.from({ length: SEGMENT_SIZE }).map((_, barIndex) => {
                const index = segmentIndex * SEGMENT_SIZE + barIndex;
                const isFilled = index < filledBars;
                const isMaxBar = index + 1 == filledBars;
                const is2ndMaxBar = index + 2 == filledBars;
                const is3rdMaxBar = index + 3 == filledBars;
                return (
                  <div
                    key={barIndex}
                    className={`progress-bar-byte 
                      ${isFilled ? "filled" : ""} 
                      ${isMaxBar ? "max-bar" : ""}
                      ${is2ndMaxBar ? "max-bar-2" : ""}
                      ${is3rdMaxBar ? "max-bar-3" : ""}
                       `}
                  >
                    {position === "left" && (
                      <>
                        <div className="half-byte left"></div>
                        <div className="half-byte right"></div>
                      </>
                    )}
                    <div></div>
                    {isMaxBar && (
                      <span className="progress-bar-text">{value}</span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
