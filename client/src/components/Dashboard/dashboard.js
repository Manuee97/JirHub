import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import { withRouter } from "react-router";
import Home from "./home";
import Project from "./project";
import Users from "./users";
import Logs from "./log";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Settings from "./settings";
import DetailsProject from "./detailsProject";
import DetailsIssues from "./detailsIssues";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this._service = new AuthService();
  }

  logoutUser = () => {
    this._service
      .logout()
      .then(x => this.props.setUser(false))
      .catch(err => console.log(err));
  };

  Navbar = () => {
    const { loggedInUser } = this.props;
    return (
      <nav className="navbar navbar-expand-lg">
        <svg className="intro" viewBox="0 0 200 86">
          <a className="nav-link" href="/">
            <text
              textAnchor="start"
              x="10"
              y="30"
              className="text text-stroke"
              clipPath="url(#text1)"
            >
              JirHub
            </text>

            <text
              textAnchor="start"
              x="10"
              y="30"
              className="text text-stroke text-stroke-2"
              clipPath="url(#text1)"
            >
              JirHub
            </text>
          </a>

          <defs>
            <clipPath id="text1">
              <text textAnchor="start" x="10" y="30" className="text">
                JirHub
              </text>
            </clipPath>
          </defs>
        </svg>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p className="userNav">Hola {loggedInUser.username}, tienes <Link className="underline"
              to={{
                pathname: "/logs",
                stateUser: {
                  user: this.props.loggedInUser
                }
              }}
            >
              <span className="nIssues">{loggedInUser.issues.length} incidencias</span>
            </Link></p>
              </li>
            {/* <li className="nav-item">
              <!-- <a class="nav-link" href="/coasters">Montañas rusas</a> -->
            </li>
            <li className="nav-item">
              <!-- <a class="nav-link" href="/parks">Parques</a> -->
            </li> */}
          </ul>
        </div>
      </nav>
    );
  };

  render() {
    // const { username, password } = this.state;
    const { loggedInUser } = this.props;
    return (
      <div>
        {this.Navbar()}
        <div className="container-dashboard">
          <div className="menu">
            <a href="/">
              <div className="itemMenu">
                <i className="fas fa-home fa-2x itemFont"></i>Home
              </div>
            </a>
            <Link
              to={{
                pathname: "/project",
                stateUser: {
                  user: this.props.loggedInUser
                }
              }}
            >
              <div className="itemMenu">
                <i className="fas fa-tasks fa-2x itemFont"></i>Project
              </div>
            </Link>
            <a href="/users">
              <div className="itemMenu">
                <i className="fas fa-user fa-2x itemFont"></i>Users
              </div>
            </a>
            <Link
              to={{
                pathname: "/logs",
                stateUser: {
                  user: this.props.loggedInUser
                }
              }}
            >
              <div className="itemMenu">
                <i className="fas fa-rss fa-2x itemFont"></i>Issues
              </div>
            </Link>
            <Link
              to={{
                pathname: "/settings",
                stateUser: {
                  user: this.props.loggedInUser
                }
              }}
            >
              <div className="itemMenu">
                <i className="fas fa-cogs fa-2x itemFont"></i>Settings
              </div>
            </Link>
            <a href="/" onClick={this.logoutUser}>
              <div className="itemMenu">
                <i className="fas fa-sign-out-alt fa-2x itemFont"></i>Logout
              </div>
            </a>
          </div>

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  name={loggedInUser.username}
                  lastname={loggedInUser.lastname}
                />
              )}
            />
            <Route exact path="/project" exact component={Project} />
            <Route
              exact
              path="/users"
              render={() => (
                <Users
                  name={loggedInUser.username}
                  lastname={loggedInUser.lastname}
                  email={loggedInUser.email}
                  id={loggedInUser.id}
                />
              )}
            />
            <Route exact path="/logs" exact component={Logs} />
            <Route
              exact
              path="/settings"
              render={props => (
                <Settings
                  {...props}
                  name={loggedInUser.username}
                  lastname={loggedInUser.lastname}
                />
              )}
            />
            <Route exact path="/todos/:id" exact component={DetailsProject} />
            <Route exact path="/issues/:id" exact component={DetailsIssues} />
          </Switch>

          {/* <Home name={loggedInUser.username} lastname={loggedInUser.lastname}></Home>
        <Project></Project> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
