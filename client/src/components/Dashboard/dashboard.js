import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { withRouter } from 'react-router'
import Home from "./home";
import Project from "./project";
import Users from "./users";
import Logs from "./log";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Settings from "./settings";
import DetailsProject from "./detailsProject";
import DetailsIssues from "./detailsIssues";

class Dashboard extends Component {
constructor(props) {
  super(props)
  this._service = new AuthService()

}

logoutUser = () => {
  this._service.logout()
      .then(x => this.props.setUser(false))
      .catch(err => console.log(err))
}



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
          <Route exact path='/settings' render={() => <Settings name={loggedInUser.username} lastname={loggedInUser.lastname}/>}  />
          <Route exact path='/todos/:id' exact component={DetailsProject}/>
          <Route exact path='/issues/:id' exact component={DetailsIssues}/>
        </Switch>

        {/* <Home name={loggedInUser.username} lastname={loggedInUser.lastname}></Home>
        <Project></Project> */}
      </div>
    );
  }
}

export default  withRouter(Dashboard);