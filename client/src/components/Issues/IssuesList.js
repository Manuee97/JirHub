import React from 'react'
import FormWrapper from './CreateTodoStyles';
import TodoService from '../../services/TodoService';
import Todo from '../Todo/Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.todoService = new TodoService();
  }

  state = {
    name: '',
    description: '',
    show: false,
    type: '',
    collaborators: [],
    boss: '',
    todos: null
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value })
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

  componentDidMount() {
    this.updateTodos()
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
      <div>
        
        <div className="container">
          <button className="show-button" onClick={this.toggleShow}>{show ? 'Hide form' : 'Show form'}</button>
          <FormWrapper onSubmit={this.handleSubmit} show={show}>
            <p>Create todo:</p>
            <div>
              <label>Todo Name:</label><input type="text" name="name" onChange={this.handleChange} value={name} />
            </div>
            <div>
              <label htmlFor="type">Tipo:</label> <input type="text" name="description" onChange={this.handleChange} value={type} />
            </div>
            <div>
              <label htmlFor="description">Description:</label> <input type="text" name="description" onChange={this.handleChange} value={description} />
            </div>
            <div>
              <label htmlFor="collaborators">Colaboradores:</label> <input type="text" name="description" onChange={this.handleChange} value={collaborators} />
            </div>
            <div>
              <label htmlFor="boss">Jefe:</label> <input type="text" name="description" onChange={this.handleChange} value={boss} />
            </div>
            <input type="submit" value="Create" className="submit-button" />
          </FormWrapper>
        </div>
        <div className="todos-container">
          {todos && this.displayTodos()}
          {!todos && <p>Loading...</p> }
        </div>
      </div>
    )
  }
}

export default TodoList;
