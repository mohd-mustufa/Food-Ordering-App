import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const Timer = () => {
  [seconds, setSeconds] = useState(0);
  [isActive, setIsActive] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  const toggleIsActive = () => setIsActive((prevState) => !prevState);

  const reset = () => {
    setSeconds(0);
    setIsActive(1);
  };

  return (
    <>
      <div>{seconds}</div>
      <button onClick={toggleIsActive}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
