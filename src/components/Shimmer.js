import React from "react";

export default Shimmer = () => (
  <>
    <h1
      id="shimmer-header"
      style={{
        background: "#ccc",
        width: "500px",
        color: "#ccc",
        marginLeft: "10px",
      }}
    >
      h
    </h1>
    <button
      style={{
        height: "30px",
        width: "200px",
        marginLeft: "10px",
        marginBottom: "20px",
        background: "#ccc",
        border: "none",
      }}
    ></button>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
      className="shimmer-container"
    >
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"> </div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
      <div className="shimmer-content"></div>
    </div>
  </>
);
