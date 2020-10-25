import React from "react";
import GlitchClip from "react-glitch-effect/core/Clip";

const Controls = ({
  progress = 0,
  next = false,
  prev = false,
  triggerLoad,
  index = 0,
  maxProgress = 0,
}) => {
  let width = 100 / maxProgress * progress + "%";
  return (
    <div className="controls">
      <div className="controls__progress">
        <span className="controls__progress__bar">
          <span className="controls__progress__bar__progress" style={{width: width}} />
        </span>
      </div>
      <div className="controls__action">
        <button
          className={`controls__action__button ${prev ? "active" : ""}`}
          onClick={() => triggerLoad((index -= 1))}
        >
          <GlitchClip onHover={true}>prev</GlitchClip>
        </button>

        <button
          className={`controls__action__button ${next ? "active" : ""}`}
          onClick={() => triggerLoad((index += 1))}
        >
          <GlitchClip onHover={true}>next</GlitchClip>
        </button>
      </div>
    </div>
  );
};

export default Controls;
