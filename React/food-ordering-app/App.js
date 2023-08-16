import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Restaurants } from "./Restaurants";
import { Footer } from "./Footer";

const App = () => (
  <>
    <Header />
    <Restaurants />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
