import React from "react";
import { json } from "react-router-dom";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }

  async fetchApiData() {
    const data = await fetch("https://api.github.com/users/mohd-mustufa");
    const jsonData = await data.json();
    console.log(jsonData);
  }

  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
    this.fetchApiData();
  }

  render() {
    console.log(this.props.name + "Child Render");
    return (
      <div className="user">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 }, () =>
              console.log(this.state)
            );
          }}
        >
          Increment Count
        </button>
        <h3>Name: {this.props.name}</h3>
        <p>location: {this.props.location}</p>
        <p>Age: 55</p>
      </div>
    );
  }
}

export default User;
