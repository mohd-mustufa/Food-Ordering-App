import React from "react";
import ReactDOM from "react-dom/client";

const header = React.createElement(
	"h1",
	{ class: "title" },
	"This is header1",
	React.createElement(
		"h2",
		{ class: "title" },
		React.createElement("h3", { class: "title" }, "This is header 3")
	)
);

const headerJSX = (
	<>
		<h1 className="title">
			This is header 1
			<h2 className="title">
				<h3 className="title">This is header3</h3>
			</h2>
		</h1>
	</>
);

const HeaderComponent = () => (
	<>
		<h1 className="title">
			This is header 1
			<h2 className="title">
				<h3 className="title">This is header 3</h3>
			</h2>
		</h1>
		<HeaderComponent2 />
	</>
);

const HeaderComponent2 = () => (
	<>
		<h1 className="title">
			This is header 1
			<h2 className="title">
				<h3 className="title">This is header 3</h3>
			</h2>
		</h1>
	</>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
// root.render(headerJSX);
root.render(<HeaderComponent />);
