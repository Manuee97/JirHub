import React, { Component } from "react";

export default class Logs extends Component {
    constructor (props) {
        super(props);

      }
  render() {
    // const { username, password } = this.state;
    return (
      <div className="contenido">
        {console.log(this)}
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