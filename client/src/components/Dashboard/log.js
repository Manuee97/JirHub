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
        
        <h1>
          Incidencias asignadas
        </h1>

        {this.props.location.stateUser.user.issues.map(id => {
                  return (
                    <a href={`/issues/${id}`} className="btn btn-primary">Ver incidencia</a>
                    
                  );
                })}

        
        {/* /issues/5df7b06a774ee075ec9cadbc */}
        {/* <img src={loggedInUser.picture} alt=""/> */}
      </div>
    );
  }
}