// ==================> <ONE>
// const header = React.createElement("h1", { id: "header" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(header);
// console.log(header);

// =============> TWO
// const parentDiv = React.createElement(
// 	"div",
// 	{ id: "parent" },
// 	React.createElement(
// 		"div",
// 		{ id: "child" },
// 		React.createElement("h1", {}, "Hello World")
// 	)
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parentDiv);
// console.log(parentDiv);

// ===========================> <THREE>
import React from "react";
import ReactDOM from "react-dom/client";

const parentDiv = React.createElement("div", { id: "parent" }, [
	React.createElement("div", { id: "child1" }, [
		React.createElement("h1", {}, "This is h1 of child1"),
		React.createElement("h2", {}, "This is h2 of child1"),
	]),
	React.createElement("div", { id: "child2" }, [
		React.createElement("h1", {}, "This is h1 of child2"),
		React.createElement("h2", {}, "This is h2 of child2"),
	]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDiv);
