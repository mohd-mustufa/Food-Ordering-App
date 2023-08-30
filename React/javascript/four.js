import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  [count, setCount] = useState(0);

  //   useEffect(() => {
  document.title = `Count: ${count}`;

  //     return () => {
  //       document.title = "React App";
  //     };
  //   }, [count]);

  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
