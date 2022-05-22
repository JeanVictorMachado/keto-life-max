import "./styles.css";

export const TimeCounter = () => {
  return (
    <div className="time-counter__container">
      <div className="time-counter__time">
        <span className="time-counter__number">0</span>
      </div>
      <div className="time-counter__time">
        <span className="time-counter__number">5</span>
      </div>

      <div className="time-counter__two-points">:</div>

      <div className="time-counter__time">
        <span className="time-counter__number">2</span>
      </div>
      <div className="time-counter__time">
        <span className="time-counter__number">5</span>
      </div>

      <div className="time-counter__two-points">:</div>

      <div className="time-counter__time">
        <span className="time-counter__number">3</span>
      </div>
      <div className="time-counter__time">
        <span className="time-counter__number">7</span>
      </div>
    </div>
  );
};
