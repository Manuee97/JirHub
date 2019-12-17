import React, { Component } from "react";
import IssuesService from "../../services/IssuesService";
import Issues from "../Issues/Issues";
import AuthService from "../../services/AuthService";

class DetailsIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "",
      type: "",
      description: "",
      assigned: "",
      show: false,
      creator: "",
      isFinish: "",
      issues: null, 
      comentariosIssues: []
    };
    this.issuesService = new IssuesService();
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    this.issuesService.fetchOneTodo(this.props.match.params.id).then(users => {
      this.setState({ users: [users] });
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.issuesService.updateTodo(this.props.match.params.id)
    .then(
      (comentariosIssues) => {
        this.setState({ ...this.state, comentariosIssues })

    });
    console.log(this.state.comentariosIssues)

    // e.preventDefault()
    // this.issuesService.updateTodo(this.props.match.params.id)
    //   .then(
    //     () => {
    //       this.setState({...this.state, comentariosIssues: ''})
    //     },
    //     (error) => console.error(error))
  }

  render() {
    const { comentariosIssues } = this.state;
    return (
      <div className="contenido">
        {this.state.users.map(item => {
          return (
            <div className="contenido">
              <div className="row">
                <div className="col-lg">
                  <h3>Nombre de la incidencia: {item.name}</h3>
                  <p>Tipo: {item.type}</p>
                  <p>Description: {item.description}</p>
                  <p>Descripción del problema: {item.comentario}</p>
                </div>
                <div className="col">
                  <p>Asignado: {this.state.users[0].assigned[0].username}</p>
                  <p>Creado: {this.state.users[0].creator[0].username}</p>
                  <p>Finalizada: {item.isFinish}</p>
                </div>
                <div className="w-100"></div>
                <div className="col">
                  <h2>Comentarios</h2>
                  <form onSubmit={this.handleSubmit} >
                  <div>
                  <textarea name="comentariosIssues" id="comentariosIssues" cols="80" rows="5"></textarea>
                  </div>
                  <button className="btn btn-primary" type="submit" value="Create">Crear comentario</button>
                  </form>
                  
                </div>
                <div className="col-sm">
                  <h2>Subidas git</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DetailsIssues;
