import React from "react";
import ReactDOM from "react-dom/client";

const makeInline = {
	display: "inline",
};

const setBackgroundColor = {
	backgroundColor: "red",
};

const HeaderComponent = () => (
	<>
		<img src={require("../images/gintoki.jpeg")} height="50px" width="50px" />
		<h1 style={makeInline}>This is a header</h1>
		<form style={makeInline}>
			<input
				type="text"
				id="searchBar"
				placeholder="Type here"
				style={{ height: "25px", width: "100px", margin: "10px" }}
			/>
			<button style={setBackgroundColor}>Submit</button>
		</form>
	</>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeaderComponent());
