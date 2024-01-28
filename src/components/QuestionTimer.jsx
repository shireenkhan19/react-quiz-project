import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout); // 1000

  const remainingTimeLeft = remainingTime > 0;

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    if (remainingTimeLeft) {
      const interval = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
      }, 100);

      return () => {
        clearInterval(interval);
      };
    }
  }, [remainingTimeLeft]);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    ></progress>
  );
}
