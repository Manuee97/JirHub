import TodoService from '../../services/TodoService';
import Todo from '../Todo/Todo';
import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import FormProject from './FormProject';


export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      collaborators: [],
      name: '',
    description: '',
    show: false,
    type: '',
    issues: [],
    boss: [],
    todos: []
    };
    this.todoService = new TodoService();
    this.authService = new AuthService();

  }

  componentDidMount=()=>{
    this.updateTodos()
    this.authService.allUsers().then((users) => {
      this.setState({...this.setState, users: users.user})
    })
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
  }

  updateCollaborators = (e) => {
    const arr = [...this.state.collaborators]
    const value  = e.target.value;
    arr.push(value)
    this.setState({ ...this.state, collaborators: arr})
  }

  handleSubmit = (e) => {
    const { name, description, type, issues, collaborators, boss } = this.state;
    e.preventDefault();
    this.todoService.createTodo({name, description, type, issues, collaborators, boss})
      .then(
        () => {
          this.setState({...this.state, name: '', description: '', type: '', issues:'', collaborators: '' , boss: []})
          this.updateTodos()
        },
        (error) => console.error(error))
  }

  displayTodos = () => {
    const { todos } = this.state;
      return todos.map((todo, i) => <Todo key={i} {...todo} updateTodos={this.updateTodos} />)  
  }
 
  updateTodos = () => {
    this.todoService.fetchTodos()
      .then(
        (todos) => {
          this.setState({ ...this.state, todos })
        },
        (error) => {
          const { message } = error;
          console.error(message)
        }
      )
  }
  
  toggleShow = () => {
    const { show } = this.state;
    this.setState({...this.state, show: !show})
  }

  render() {
    const { loggedInUser } = this.props;
    const { name, description, show, todos, type, issues, collaborators, boss } = this.state;
    return (
      <div className="contenido">
        <h1>Proyectos</h1>
    {this.props.location.stateUser.user.isAdmin && <button className="btn btn-primary" onClick={this.toggleShow}>Crear Proyecto</button> }
          
        <div className="modals">
        <FormProject show={show}>
          <form onSubmit={this.handleSubmit} className="form">
          <p>Crear Proyecto:</p>
          <div>
          <label>Nombre:</label><input type="text" name="name" onChange={this.handleChange} value={name} />
          </div>
          <div>
              <label htmlFor="type">Tipo:</label> <input type="text" name="type" onChange={this.handleChange} value={type} />
            </div>
            <div>
              <label htmlFor="description">Descripción:</label> <input type="text" name="description" onChange={this.handleChange} value={description} />
            </div>
            <div>

            <label htmlFor="collaboratos">Programadores:</label>
            <select multiple> 
            {this.state.users.map(user => {
                  return (
                    
                  <option onClick={this.updateCollaborators} value={user.id}>{user.username}</option> 
                    
                  );
                })}
                </select>

            </div>
            <div>
              <label htmlFor="boss">Jefe:</label> <input type="text" name="boss" onChange={this.handleChange} value={boss} />
            </div>
            <div className="buttonProject">
              <button className="btn danger" onClick={this.toggleShow}>Salir</button>
              <button className="btn btn-primary" ype="submit" value="Create">Crear</button>
            </div>
            
          </form>
          

        </FormProject>
        </div> 

        <div>
        <div className="row">
          { !this.props.location.stateUser.user.isAdmin && this.state.todos.map(user => {
                  return (
                    
                    <div className="col-sm-5 margin-project">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.description}</p>
                        <p className="card-text">{user.boss}</p>
                        <a href={`/todos/${user.id}`}  className="btn btn-primary">Ver proyecto</a>
                      </div>
                    </div>
                  </div>
                    
                  );
          })} 
          
          {  this.props.location.stateUser.user.isAdmin && this.displayTodos()}
          {!todos && <p>Loading...</p> } 
        </div>
        </div>
      </div>
    );
  }
}

