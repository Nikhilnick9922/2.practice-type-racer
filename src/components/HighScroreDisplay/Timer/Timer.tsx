import React, { useState, useEffect } from "react";
import styles from "./Timer.module.css";

const Timer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const seconds = currentTime.getSeconds();

  const formattedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className={styles.timerContainer}>
      <span className={styles.timerText}>{`0:${formattedSeconds}`}</span>
    </div>
  );
};

export default Timer;
