import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default",
        bio: "NA",
      },
      count: 0,
    };
    console.log(this.props.name + "Child Constructor");
  }

  async fetchApiData() {
    const data = await fetch("https://api.github.com/users/mohd-mustufa");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }

  componentDidMount() {
    console.log(this.props.name + "Child ComponentDidMount");
    this.fetchApiData();
    this.timer = setInterval(() => {
      console.log("mount timer");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child ComponentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "Child ComponentWillUnmount");
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    console.log(this.props.name + "Child Render");
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment Count
        </button>
        <div className="user">
          <img style={{ height: "200px", width: "200px" }} src={avatar_url} />
          <h3>Name: {name}</h3>
          <p>Occupation: {bio}</p>
        </div>
      </>
    );
  }
}

export default User;
