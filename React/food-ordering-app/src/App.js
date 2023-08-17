import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Restaurants } from "./components/Restaurants";
import { Footer } from "./components/Footer";

const App = () => (
  <>
    <Header />
    <Restaurants />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
