import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Default",
        bio: "NA",
      },
    };
  }

  async fetchApiData() {
    const data = await fetch("https://api.github.com/users/mohd-mustufa");
    const jsonData = await data.json();
    this.setState({ userInfo: jsonData });
  }

  componentDidMount() {
    this.fetchApiData();
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <img style={{ height: "200px", width: "200px" }} src={avatar_url} />
        <h3>Name: {name}</h3>
        <p>Occupation: {bio}</p>
      </div>
    );
  }
}

export default User;
