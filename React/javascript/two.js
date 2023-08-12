import React from "react";
import ReactDOM from "react-dom/client";

const header = (
	<>
		<h1 id="heading">Hi Mustufa</h1>
		<br />
		<p style={{ color: "red" }}>The time is: {new Date().toDateString()}</p>
	</>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
