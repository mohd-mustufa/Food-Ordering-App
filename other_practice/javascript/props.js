import React, { Children } from "react";
import ReactDOM from "react-dom/client";

const Person = () => (
  <div>
    <Food />
  </div>
);

const Food = ({ name = "haha", food = "hehe" }) => (
  <p>
    My name is {name} and my favorite food is {food}
  </p>
);
Food.defaultProps = {
  name: "default",
  food: "default",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Person />);
