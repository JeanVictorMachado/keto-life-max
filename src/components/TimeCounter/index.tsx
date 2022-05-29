import { useEffect, useState } from "react";

import "./styles.css";

interface TimeCounterProps {
  hourQuantity:
    | "24"
    | "23"
    | "22"
    | "21"
    | "20"
    | "19"
    | "18"
    | "17"
    | "16"
    | "15"
    | "14"
    | "13"
    | "12"
    | "11"
    | "10"
    | "9"
    | "8"
    | "7"
    | "6"
    | "5"
    | "4"
    | "3"
    | "2"
    | "1";
}

export const TimeCounter = ({ hourQuantity }: TimeCounterProps) => {
  const [hourleft, setHourLeft] = useState(() => {
    const hour = hourQuantity?.split("");

    if (hour && hour.length > 1) {
      return Number(hour[0]) - 1;
    }

    return 0;
  });

  const [hourRight, setHourRight] = useState(() => {
    const hour = hourQuantity?.split("");

    if (hour && hour.length > 1) {
      return Number(hour[1]) - 1;
    }

    return hour ? Number(hour[0]) - 1 : 0;
  });

  const [minleft, setMinLeft] = useState(5);
  const [minRight, setMinRight] = useState(9);
  const [secondleft, setSecondLeft] = useState(5);
  const [secondRight, setSecondRight] = useState(9);

  const handleTimeCounter = () => {
    setSecondRight(secondRight - 1);

    if (secondRight === 0) {
      setSecondRight(9);
      setSecondLeft(secondleft - 1);
    }

    if (secondleft === 0 && secondRight === 0) {
      setSecondLeft(5);
      setMinRight(minRight - 1);
    }

    if (minRight === 0) {
      setMinRight(9);
      setMinLeft(minleft - 1);
    }

    if (minleft === 0 && minRight === 0) {
      setMinLeft(5);
      setHourRight(hourRight - 1);
    }

    if (hourRight === 0) {
      setHourRight(0);
      setHourLeft(hourleft - 1);
    }

    if (hourleft === 0 && hourRight === 0) {
      setHourLeft(0);
    }
  };

  useEffect(() => {
    const time = 1000;

    setTimeout(() => {
      handleTimeCounter();
    }, time);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondRight]);

  return (
    <div className="time-counter__container">
      <div className="time-counter__time">
        <span className="time-counter__number">{hourleft}</span>
      </div>
      <div className="time-counter__time">
        <span className="time-counter__number">{hourRight}</span>
      </div>

      <div className="time-counter__two-points">:</div>

      <div className="time-counter__time">
        <span className="time-counter__number">{minleft}</span>
      </div>
      <div className="time-counter__time">
        <span className="time-counter__number">{minRight}</span>
      </div>

      <div className="time-counter__two-points">:</div>

      <div className="time-counter__time">
        <span className="time-counter__number">{secondleft}</span>
      </div>
      <div className="time-counter__time">
        <span className="time-counter__number">{secondRight}</span>
      </div>
    </div>
  );
};
