import React, { Component } from "react";

export default class Home extends Component {
    constructor (props) {
        super(props);

      }
  render() {
    // const { username, password } = this.state;
    return (
      <div className="contenido">
        <h1>
          Hola bienvenido {this.props.name} {this.props.lastname}
        </h1>
        {/* <img src={loggedInUser.picture} alt=""/> */}
      </div>
    );
  }
}
