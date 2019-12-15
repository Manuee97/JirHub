import React, { Component } from "react";
import IssuesService from "../../services/IssuesService";
import Issues from "../Issues/Issues";
import AuthService from "../../services/AuthService";

class DetailsIssues extends Component {
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
      issues: null
    };
    this.issuesService = new IssuesService();
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    this.issuesService.fetchOneTodo(this.props.match.params.id).then(users => {
      this.setState({ users: [users] });
    });
  };


  render() {
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
                <p>Proyecto: {item.idProject}</p>
                <p>Descripción del problema: {item.comentario}</p>
                </div>
                <div className="col-sm">
                <p>Asignado: {item.assigned}</p>
              <p>Creador: {item.creator}</p>
              <p>Finalizada: {item.isFinish}</p>
                </div>
                <div className="w-100"></div>
                <div className="col"><h2>Comentarios</h2></div>
                <div className="col"><h2>Subidas git</h2></div>
              </div>
            </div>

          );
        })}
      </div>
    );
  }
}

export default DetailsIssues;