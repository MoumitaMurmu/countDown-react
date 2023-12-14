import React, { useEffect, useRef, useState } from "react";

function App() {
  // State for the countdown
  const [countdown, setCountdown] = useState(10);

  // Ref to store the interval ID
  const id = useRef();

  // useEffect to clear the interval when the component unmounts
  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  // Function to handle the "Start" button click
  const handleStartButtonClick = () => {
    // Start the countdown using setInterval
    id.current = setInterval(() => {
      // Update the countdown state
      setCountdown((prevCountdown) => {
        // If countdown reaches 0, clear the interval and reset countdown to 10
        if (prevCountdown === 0) {
          clearInterval(id.current);
          return 10;
        } else {
          // Decrement the countdown by 1
          return prevCountdown - 1;
        }
      });
    }, 1000);
  };

  // Render the component
  return (
    <div>
      <h1>Countdown: {countdown}</h1>
      <button onClick={handleStartButtonClick}>Start</button>
    </div>
  );
}

export default App;
