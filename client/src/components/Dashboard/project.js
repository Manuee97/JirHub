import FormWrapper from './CreateTodoStyles';
import TodoService from '../../services/TodoService';
import Todo from '../Todo/Todo';
import React, { Component } from "react";
import AuthService from "../../services/AuthService";

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
    boss: '',
    todos: null
    };
    this.todoService = new TodoService();
    this.authService = new AuthService();

  }

  componentDidMount=()=>{
    this.updateTodos()
    this.authService.allUsers().then((users) => {
      console.log(users)
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
    const { name, description, type, collaborators, boss } = this.state;
    e.preventDefault();
    this.todoService.createTodo({name, description, type, collaborators, boss})
      .then(
        () => {
          this.setState({...this.state, name: '', description: '', type: '', collaborators: '' , boss: ''})
          this.updateTodos()
        },
        (error) => console.error(error))
  }

  displayTodos = () => {
    const { todos } = this.state;
    // <Todo key={i} name={todo.name} description={todo.description} done={todo.done} />
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
    const { name, description, show, todos, type, collaborators, boss } = this.state;
    return (
      <div className="contenido">
          <h1>Aqui se mostrarán los proyectos y tendra el boton para crear uno nuevo</h1>
      <div>
        
        <div className="container">
          <button className="show-button" onClick={this.toggleShow}>Crear Proyecto</button>
          <FormWrapper onSubmit={this.handleSubmit} show={show}>
            <p>Create todo:</p>
            <div>
              <label>Todo Name:</label><input type="text" name="name" onChange={this.handleChange} value={name} />
            </div>
            <div>
              <label htmlFor="type">Tipo:</label> <input type="text" name="type" onChange={this.handleChange} value={type} />
            </div>
            <div>
              <label htmlFor="description">Description:</label> <input type="text" name="description" onChange={this.handleChange} value={description} />
            </div>
            <div>

            <label htmlFor="collaboratos">Colaboradores:</label>
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
            <input type="submit" value="Create" className="submit-button" />
          </FormWrapper>
        </div>
        <div className="todos-container">
          {todos && this.displayTodos()}
          {!todos && <p>Loading...</p> }
        </div>
      </div>
      </div>
    );
  }
}

