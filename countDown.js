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


/*
1.Import Statements:

Import the necessary React hooks (useEffect, useRef, useState) from the React library.
Functional Component App:

2.Define a functional component named App.

3.State Initialization:

Initialize state using the useState hook to manage the countdown value. The initial value is set to 10.
Ref Initialization:

4.Create a ref using the useRef hook to store the interval ID.

5.useEffect for Cleanup:

Use the useEffect hook with an empty dependency array to clean up the interval when the component is unmounted. 
The return function clears the interval using the stored ID.

6.handleStartButtonClick Function:

7.Define a function handleStartButtonClick to handle the click event of the "Start" button.
Inside this function:

8.Start an interval using setInterval.
Within the interval, update the countdown state using the functional form of setCountdown.
If the countdown reaches 0, clear the interval and reset the countdown to 10.
*/ 
