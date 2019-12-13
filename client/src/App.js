import React from 'react';
import './App.css';
import TodoService from './services/TodoService';
import TodoList from './components/TodoList/TodoList';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import AuthService from './services/AuthService';
import Index from './components/Index/Index';
import PrivateRoute from './guards/PrivateRoute';
import Dashboard from './components/Dashboard/dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.todoService = new TodoService();
    this.authService = new AuthService();
  }

  state = {
    user: null
  }

  setUser = (user) => {
    this.setState({ ...this.state, user })
  }

  fetchUser = () => {
    if (this.state.user === null) {
      this.authService.loggedInUser()
        .then(
          (user) => {
            this.setUser(user)
          },
          (error) => {
            this.setUser(false)
          }
        )
        .catch(() => {
          this.setUser(false)
        })
    }
  }

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    this.fetchUser()
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {user && <Switch>
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />  
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            <Route exact path="/logout" user={user} />

            <PrivateRoute exact path="/" user={user} component={Dashboard} />
            <PrivateRoute exact path="/prueba" user={user} component={TodoList} />
            <PrivateRoute exact path="/project" user={user} component={Dashboard} />
            <PrivateRoute exact path="/users" user={user} component={Dashboard} />
            <PrivateRoute exact path="/logs" user={user} component={Dashboard} />
            <PrivateRoute exact path="/settings" user={user} component={Dashboard} />
            <PrivateRoute exact path="/todos/:id" user={user} component={Dashboard} />
          </Switch> }
          {!user && <Switch>
            <Route exact path="/login" render={(match) => <Login {...match} setUser={this.setUser} />} />  
            <Route exact path="/signup" render={(match) => <SignUp {...match} setUser={this.setUser} />} />
            <Route exact path="/logout" user={user}  />

            <Route exact path="/"  component={Index} />
          </Switch> }

        </header>
      </div>
    );
  }
}

export default App;
