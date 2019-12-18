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
      creator: this.props.loggedInUser.id,
      isFinish: false,
      comentario: '',
      issues: null,
      idProject: null,
      todo: null
    };
    this.issuesService = new IssuesService();
    this.todoService = new TodoService();
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    this.updateTodos()
    const idProject = this.props.match.params.id
    this.todoService.fetchOneTodo(this.props.match.params.id).then(todo => {
      this.setState({ ...this.state, todo: todo, idProject: this.props.match.params.id});
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
    const { name, type, description, assigned, creator, isFinish, comentario, idProject  } = this.state;
    e.preventDefault()
    this.issuesService.createTodo({name, type, description, assigned, creator, isFinish, comentario, idProject})
      .then(
        () => {
          this.setState({...this.state, name: '', type: '', description: '', assigned: '', isFinish: '', comentario: ''})
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
    const { name, type, description, assigned, creator, isFinish, show, issues, comentario, todo} = this.state;
    return (

      

      <div className="contenido">
        {todo && (<div>
              <h3>Nombre del proyecto: {todo.name}</h3>
              <p>Tipo: {todo.type}</p>
              <p>Description: {todo.description}</p>
              <p>Programadores:&nbsp; 
              {todo.collaborators.map(user => {
                  return (
                   <span>
                      {user.username}&nbsp; 
                   </span>
                    
                  );
                })}
              </p>
              <p>Jefe: {todo.boss[0].username}</p>
            </div>)}

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
            {/* <label htmlFor="creator">Creador:</label> */}
            <input
              type="hidden"
              name="creator"
              onChange={this.handleChange}
              value={creator}
            />
          </div>
          <div>
            {/* <label htmlFor="isFinish">Finish:</label> */}
            <input
              type="hidden"
              name="isFinish"
              onChange={this.handleChange}
              value={isFinish}
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
          <div className="buttonProject">
              <button className="btn danger" onClick={this.toggleShow}>Salir</button>
              <button className="btn btn-primary" type="submit" value="Create">Crear</button>
            </div>
          </form>
          

        </FormProject>
        </div> 
        <div>
        <div className="contenido">
          <div className="issuesRow">
            <div className="issuesSize">
           <h2>Finalizadas</h2>
              {/* this.props.loggedInUser.isAdmin */}
               {!this.props.loggedInUser.isAdmin && issues ? this.state.issues.map(issue => {
                  return (
                    <div className="col-sm-10 margin-project">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{issue.name}</h5>
                        <p className="card-text">{issue.type}</p>
                        <p className="card-text">{issue.description}</p>
                        <div className="issuesRow">
                        <a href={`/issues/${issue.id}`} className="btn btn-primary">Ver incidencia</a>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  );
          }):null}    
              
            

            {this.props.loggedInUser.isAdmin && issues && this.displayTodos()}
            {!issues && <p>Loading...</p> }
            </div>
            <div className="issuesSize">
           <h2>No finalizadas</h2>
           {!this.props.loggedInUser.isAdmin && issues ? this.state.issues.map(issue => {
                  return (
                    <div className="col-sm-10 margin-project">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{issue.name}</h5>
                        <p className="card-text">{issue.type}</p>
                        <p className="card-text">{issue.description}</p>
                        <div className="issuesRow">
                        <a href={`/issues/${issue.id}`} className="btn btn-primary">Ver incidencia</a>
                        </div>
                      </div>
                    </div>
                  </div>
                    
                  );
          }):null}  

            {this.props.loggedInUser.isAdmin && issues && this.displayTodos()}
            {!issues && <p>Loading...</p> }
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default DetailsProject;
