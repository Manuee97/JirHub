import React, { Component } from "react";
import AuthService from "../../services/AuthService";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: "",
    lastname: "",
    email: "",
    password: "",
    // picture: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleSignUp = e => {
    e.preventDefault();
    const { history, setUser } = this.props;
    this.authService.signup(this.state).then(
      user => {
        setUser(user);
        history.push("/");
      },
      error => {
        console.error(error);
      }
    );
  };

  handleUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append('picture', e.target.files[0])
    this.authService.upload(uploadData)
    .then(
      (data) => {
        this.setState({...this.state, picture: data.secure_url})
      },
      (error) => {
        console.error(error)
      }
    )
  }

  render() {
    const { username, lastname, email, password, isAdmin, picture } = this.state;
    return (
      <div>
        <div className="containerRegister">
          <div className="login-page">
            <div className="form">
              <h2 className="h2center">Sign Up</h2>
              <form className="register-form" onSubmit={this.handleSignUp}>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="lastname">Last Name: </label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  required
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  value={password}
                  name="password"
                  required
                  onChange={this.handleChange}
                />

                <input
                  type="file"
                  name="picture"
                  onChange={this.handleUpload}
                />
                <button>SignUp</button>
                <p className="message">
                  Already registered? <a href="/login">Sign In</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
