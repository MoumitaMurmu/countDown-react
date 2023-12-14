import "./styles.css";
import React, { useState, useEffect } from "react";

function App() {
  const [countdown, setCountdown] = useState(10);
  const [isCounting, setIsCounting] = useState(false);

  const handleStartButtonClick = () => {
    setIsCounting(true);
  };

  useEffect(() => {
    let intervalId;

    if (isCounting) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            setIsCounting(false);
            clearInterval(intervalId);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isCounting]);

  return (
    <div>
      <h1>Countdown: {countdown}</h1>
      <button onClick={handleStartButtonClick} disabled={isCounting}>
        Start
      </button>
    </div>
  );
}

export default App;
