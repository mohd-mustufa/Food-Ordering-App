import React from "react";
import ReactDOM from "react-dom/client";

const HeadingComponent = () => (
	<>
		<div className="container">
			<h1>Hi Mustufa</h1>
			<HeadingTwo />
			{normalVariable}
		</div>
	</>
);

const HeadingTwo = () => (
	<div id="heading2">
		<h2>This is heading two</h2>
	</div>
);

const normalVariable = <h3>This is a js obj</h3>;

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(HeadingComponent());
root2.render(HeadingComponent());
