import React, { Component } from "react";
import AuthService from "../../services/AuthService";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: "",
    password: "",
    picture: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleIndex = e => {
    e.preventDefault();
    const { history, setUser } = this.props;
    this.authService.index(this.state).then(
      user => {
        setUser(user);
        history.push("/");
      },
      error => {
        console.error(error);
      }
    );
  };

  handleUpload = e => {
    const uploadData = new FormData();
    uploadData.append("picture", e.target.files[0]);
    this.authService.upload(uploadData).then(
      data => {
        this.setState({ ...this.state, picture: data.secure_url });
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    return (
      <div className="containerIndex">
        <div className="text-svg">
          <svg
            viewBox="-15 20 750 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path id="path">
              <animate
                attributeName="d"
                from="m0,110 h0"
                to="m0,110 h1100"
                dur="6.8s"
                begin="0s"
                repeatCount="indefinite"
              />
            </path>
            <text
              fontSize="20"
              fontFamily="Montserrat"
              fill="hsl(360, 100%, 100%)"
            >
              <textPath xlinkHref="#path">
                A more precise way to define the workflow and manage daily
                tasks.
              </textPath>
            </text>
          </svg>
        </div>
        <div className="buttons">
          <a href="/login">
            <button className="btn btn-link btnl">Log in</button>
          </a>
          <a href="/signup">
            <button className="btn btn-link btnl">Sign Up</button>
          </a>
        </div>
      </div>
    );
  }
}
