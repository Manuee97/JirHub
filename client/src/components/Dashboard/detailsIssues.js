import React, { Component } from "react";
import IssuesService from "../../services/IssuesService";
import Issues from "../Issues/Issues";
import AuthService from "../../services/AuthService";
import { PrismCode } from "./PrismCode";

class DetailsIssues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: null,
      name: "",
      type: "",
      description: "",
      assigned: "",
      show: false,
      // creator: "",
      isFinish: "",
      issues: null,
      comentariosIssues: ""
    };
    this.issuesService = new IssuesService();
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    if(this.state.issue===null){
      this.issuesService.fetchOneTodo(this.props.match.params.id).then(issue => {
        this.setState({ ...this.state, issue: issue });
      });
    }
  };

  handleChange = e => {
    const comentariosIssues = e.target.value;
    this.setState({ ...this.state, comentariosIssues: comentariosIssues });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.issuesService
      .updateTodo(this.props.match.params.id, this.state.comentariosIssues)
      .then(comentariosIssues => {
        this.setState({ ...this.state, comentariosIssues: "" });
      });
  };

  render() {
    console.log(this.state.issue)
    if(this.state.issue) {
      const { comentariosIssues, issue } = this.state;
      const code = this.state.issue.patch;
    
    console.log(code)
    return (
      <div className="contenido">
        {issue && (
          <div className="contenido">
            <div className="row">
              <div className="col-lg">
                <h3>Nombre de la incidencia: {issue.issue.name}</h3>
                <p>Tipo: {issue.issue.type}</p>
                <p>Description: {issue.issue.description}</p>
                <p>Descripción del problema: {issue.issue.comentario}</p>
              </div>
              <div className="col">
                <p>Asignado: {issue.issue.assigned[0].username}</p>
                <p>Creado: {issue.issue.creator[0].username}</p>
                <p>Finalizada: {issue.issue.isFinish}</p>
              </div>
              <div className="w-100"></div>
              <div className="col">
                <h2>Comentarios</h2>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <textarea
                      name="comentariosIssues"
                      id="comentariosIssues"
                      onChange={this.handleChange}
                      cols="90"
                      rows="5"
                      value={comentariosIssues}
                    ></textarea>
                  </div>
                  <br />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    value="Create"
                  >
                    Crear comentario
                  </button>
                </form>
                
                {this.state.issue.issue.comentariosIssues.map(issue => {
                  return (
                    <div className="card comments">
                      <p>{issue}</p>
                    </div>
                  );
                })}
              </div>
              <div className="col-sm">
                <h2>Subidas git</h2>
                {this.state.issue.patch && <PrismCode
                  code={code}
                  language="diff-javascript"
                  plugins={["diff-highlight"]}
                ></PrismCode>}

                
              </div>
            </div>
          </div>
        )}
      </div>
    );} else return (<div>Loading...</div>)
  }
}

export default DetailsIssues;
