import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { withRouter } from 'react-router'
import Home from "./home";
import Project from "./project";
import Users from "./users";
import Logs from "./log";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Settings from "./settings";

class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.authService = new AuthService();
//   }
constructor(props) {
  super(props)
  this._service = new AuthService()

}

logoutUser = () => {
  this._service.logout()
      .then(x => this.props.setUser(false))
      .catch(err => console.log(err))
}

//   state = {
//     username: "",
//     lastname: "",
//     email: "",
//     password: "",
//     picture: ""
//   };

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({ ...this.state, [name]: value });
//   };
//   handleLogin = e => {
//     const { setUser, history } = this.props;
//     e.preventDefault();
//     this.authService.login(this.state).then(
//       user => {
//         setUser(user);
//         history.push("/");
//       },
//       error => {
//         console.error(error);
//       }
//     );
//   };

  render() {
    // const { username, password } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div className="container-dashboard">
        <div className="menu">
          <a href="/">
            <div className="itemMenu">
              <i className="fas fa-home fa-2x itemFont"></i>Home
            </div>
          </a>
          <a href="/project">
            <div className="itemMenu">
              <i className="fas fa-tasks fa-2x itemFont"></i>Project
            </div>
          </a>
          <a href="/users">
            <div className="itemMenu">
              <i className="fas fa-user fa-2x itemFont"></i>User
            </div>
          </a>
          <a href="/logs">
            <div className="itemMenu">
              <i className="fas fa-rss fa-2x itemFont"></i>Log
            </div>
          </a>
          <a href="/settings">
            <div className="itemMenu">
              <i className="fas fa-cogs fa-2x itemFont"></i>Settings
            </div>
          </a>
          <a href="/" onClick={this.logoutUser}>
            <div className="itemMenu">
              <i className="fas fa-sign-out-alt fa-2x itemFont"></i>Logout
            </div>
          </a>
        </div>

        <Switch>
          <Route exact path="/"  render={() => <Home name={loggedInUser.username} lastname={loggedInUser.lastname}/>} />
          <Route exact path='/project' exact component={Project} />
          <Route exact path='/users' render={() => <Users name={loggedInUser.username} lastname={loggedInUser.lastname} email={loggedInUser.email} id={loggedInUser.id} />}/>
          <Route exact path='/logs' exact component={Logs} />
          <Route exact path='/settings' exact component={Settings} />
          <Route path='/post/:id' />
        </Switch>

        {/* <Home name={loggedInUser.username} lastname={loggedInUser.lastname}></Home>
        <Project></Project> */}
      </div>
    );
  }
}

export default  withRouter(Dashboard);