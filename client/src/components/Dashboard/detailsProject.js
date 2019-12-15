import React, { Component } from "react";
import IssuesService from "../../services/IssuesService";
import Issues from "../Issues/Issues";
import AuthService from "../../services/AuthService";
import TodoService from '../../services/TodoService';
import FormProject from './FormProject';

class DetailsProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: '',
      type: '',
      description: '',
      assigned: '',
      show: false,
      creator: '',
      isFinish: '',
      idProject: '',
      comentario: '',
      issues: null
    };
    this.issuesService = new IssuesService();
    this.todoService = new TodoService();
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    this.updateTodos()
    this.todoService.fetchOneTodo(this.props.match.params.id).then(users => {
      this.setState({ users: [users] });
    });
  };

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
    const { name, type, description, assigned, creator, isFinish, idProject, comentario  } = this.state;
    e.preventDefault();
    this.issuesService.createTodo({name, type, description, assigned, creator, isFinish, idProject, comentario})
      .then(
        () => {
          this.setState({...this.state, name: '', type: '', description: '', assigned: '' , creator: '', isFinish: '', idProject: '', comentario: ''})
          this.updateTodos()
        },
        (error) => console.error(error))
  }

  displayTodos = () => {
    const { issues } = this.state;
    return issues.map((issue, i) => <Issues key={i} {...issue} updateTodos={this.updateTodos} />)
  }
 

  updateTodos = () => {
    this.issuesService.fetchTodos()
      .then(
        (issues) => {
          this.setState({ ...this.state, issues })
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
    const { name, type, description, assigned, creator, isFinish, idProject, show, issues, comentario} = this.state;
    return (



      <div className="contenido">
        {this.state.users.map(item => {
          return (
            <div>
              <h3>Nombre del proyecto: {item.name}</h3>
              <p>Tipo: {item.type}</p>
              <p>Description: {item.description}</p>
              <p>Colaboradores: {item.collaborators}</p>
              <p>Jefe: {item.boss}</p>
            </div>
          );
        })}

        <button className="btn btn-primary" onClick={this.toggleShow}>
          Crear Incidencia
        </button>

        <div className="modals">
        
        <FormProject show={show}>
          <form onSubmit={this.handleSubmit} className="form">
          <p>Crear Incidencia:</p>
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
            <label htmlFor="assigned">Asignado:</label>
            <input
              type="text"
              name="assigned"
              onChange={this.handleChange}
              value={assigned}
            />
          </div>
          <div>
            <label htmlFor="creator">Creador:</label>
            <input
              type="text"
              name="creator"
              onChange={this.handleChange}
              value={creator}
            />
          </div>
          <div>
            <label htmlFor="isFinish">Finish:</label>
            <input
              type="text"
              name="isFinish"
              onChange={this.handleChange}
              value={isFinish}
            />
          </div>
          <div>
            <label htmlFor="idProject">Proyecto:</label>
            <input
              type="text"
              name="idProject"
              onChange={this.handleChange}
              value={idProject}
            />
          </div>
          <div>
            <label htmlFor="comentario">Descripción del problema:</label>
            <input
              type="text"
              name="comentario"
              onChange={this.handleChange}
              value={comentario}
            />
          </div>
            <button className="btn btn-primary" ype="submit" value="Create">Crear</button>
            <button className="btn btn-danger" onClick={this.toggleShow}>Salir</button>
          </form>
          

        </FormProject>
        </div> 
        <div>
        <div className="contenido">
        <div className="row">
          {issues && this.displayTodos()}
          {!issues && <p>Loading...</p> }
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default DetailsProject;
