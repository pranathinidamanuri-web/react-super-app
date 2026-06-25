import { useState, useEffect } from "react";

const TimerWidget = () => {
  const [time, setTime] = useState(60); // 60 seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Timer</h3>

      <h2>{time}s</h2>

      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Pause</button>
      <button onClick={() => {
        setTime(60);
        setRunning(false);
      }}>
        Reset
      </button>
    </div>
  );
};

export default TimerWidget;