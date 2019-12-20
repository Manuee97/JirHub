import React, { Component } from "react";
import IssuesService from "../../services/IssuesService";
import Issues from "../Issues/Issues";
import AuthService from "../../services/AuthService";
import { PrismCode } from "./PrismCode";
import Prism from "prismjs"
import FormProject from './Diff';


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
      isFinish: "",
      issues: null,
      comentariosIssues: ""
    };
    this.issuesService = new IssuesService();
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    const id = this.props.match.params.id;
    // Prism.highlightAll();
      this.issuesService.fetchOneTodo(id).then(issue => {
        console.log(issue)
        this.setState({ ...this.state, issue: issue });
      });
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

  toggleShow = () => {
    const { show } = this.state;
    this.setState({...this.state, show: !show})
  }

  render() {
    if(this.state.issue) {
      const { comentariosIssues, issue, show } = this.state;
      const code = this.state.issue.patch;
    
    return (
      <div className="contenido">
                        <div className="modals">
        
        <FormProject show={show}>
          <div className="whiteBack">
          {this.state.issue.patch && <PrismCode
                  code={code}
                ></PrismCode>}
                
          </div>
          <button className="btn btn-danger" onClick={this.toggleShow}>
                  Salir
                </button>
        </FormProject>
        </div> 
        {issue && (
          <div className="contenido">
            <div className="row">
              <div className="issuesSizeLeft">
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
              <div className="issuesSizeLeft">
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
              <div className="col">
                <h2>Subidas git</h2>
                <button className="btn btn-primary" onClick={this.toggleShow}>
                  Ver cambios en el código
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );} else return (<div>Loading...</div>)
  }
}

export default DetailsIssues;
