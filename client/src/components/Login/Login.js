import React, { Component } from "react";
import AuthService from "../../services/AuthService";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }

  state = {
    username: "",
    lastName: "",
    email: "",
    password: "",
    picture: ""
  };
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleLogin = e => {
    const { setUser, history } = this.props;
    e.preventDefault();
    this.authService.login(this.state).then(
      user => {
        setUser(user);
        history.push("/");
      },
      error => {
        console.error(error);
      }
    );
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <div className="containerRegister">
          <div className="login-page">
            <div className="form">
              <h2 className="h2center">Login</h2>
              <form className="login-form" onSubmit={this.handleLogin}>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
                <button>Login</button>
                <p className="message">
                  Not registered? <a href="/signup">Create an account</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
