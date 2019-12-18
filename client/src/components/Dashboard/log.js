import React, { Component } from "react";
import IssuesService from "../../services/IssuesService";


export default class Logs extends Component {
    constructor (props) {
        super(props);
        this.state = {
          issues: [],
        };
        this.issuesService = new IssuesService();

      }

      componentDidMount = () => {
        let newIssues = [...this.state.issues];
        this.props.location.stateUser.user.issues.map(id => {
            this.issuesService.fetchOneTodo(id).then(issue => {
              newIssues.push(issue)
              this.setState({ ...this.state, issues: newIssues });
            })
        })
      };


  render() {
    return (
      <div className="contenido">
      {console.log(this)}
        <h1>
          Incidencias asignadas
        </h1>
        <div className="row">

        {this.state.issues.map(id => {
                  return (
                    <div className="col-sm-5 margin-project">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{id.name}</h5>
                        <p className="card-text">{id.type}</p>
                        <p className="card-text">{id.description}</p>
                        <a href={`/issues/${id.id}`}  className="btn btn-primary">Ver incidencia</a>
                      </div>
                    </div>
                  </div>                    
                  );
                })}

        </div>
        {/* /issues/5df7b06a774ee075ec9cadbc */}
        {/* <img src={loggedInUser.picture} alt=""/> */}
      </div>
    );
  }
}