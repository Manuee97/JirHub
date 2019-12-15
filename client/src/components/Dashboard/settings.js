import React, { Component } from "react";
import AuthService from "../../services/AuthService";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    }
    this.authService = new AuthService();

  }

  render() {

    return (
      <div className="card">
        <img className="card-img-top" src={this.props.picture} />
        <div className="card-body">
    <h5 className="card-title">{this.props.name} {this.props.lastname}</h5>
    <h5 className="card-title">{this.props.email}</h5>

          <p className="card-text">
            Rango:
          </p>
          <a href="#" className="btn btn-primary">
            Editar usuario
          </a>
        </div>
      </div>
    );
  }
}

// username: { type: String, required: true, unique: true },
// lastname: { type: String, required: true },
// email:    { type: String, required: true },
// password: { type: String, required: true, minlength: 2 },
// picture:  { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
// isAdmin:  { type: Boolean, default: true }
