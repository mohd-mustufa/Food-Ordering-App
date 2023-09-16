import UserContext from "../commonUtils/UserContext";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the about page for mustufa's food app</h1>
        <h2>
          <UserContext.Consumer>
            {(context) => context.userName}
          </UserContext.Consumer>
        </h2>
        <div className="about">
          <User name="First" location="India" />
        </div>
      </div>
    );
  }
}

export default About;
