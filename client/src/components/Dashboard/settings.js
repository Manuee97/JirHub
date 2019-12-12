import React, { Component } from "react";

export default class Settings extends Component {
    constructor (props) {
        super(props);

      }
  render() {
    // const { username, password } = this.state;
    return (
      <div className="contenido">
        <ul>
            <li>Cambiar nombre contraseñas y demas</li>
        </ul>
        {/* <img src={loggedInUser.picture} alt=""/> */}
      </div>
    );
  }
}