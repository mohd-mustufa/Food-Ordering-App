import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Child Constructor");

    return (
      <div>
        <h1>This is the about page for mustufa's food app</h1>
        <div className="about">
          <User name="First" location="India" />
        </div>
      </div>
    );
  }
}

export default About;
