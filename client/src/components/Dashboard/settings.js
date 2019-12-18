import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import FormProject from './FormProject';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      show: false,
    }
    this.authService = new AuthService();

  }

  toggleShow = () => {
    const { show } = this.state;
    this.setState({...this.state, show: !show})
  }

  render() {
    const { show } = this.state;
    return (
      <div className="paddingSettings">

      
      <div className="card paddingSettingsCard">
        <img className="card-img-top imgSize" src={this.props.location.stateUser.user.picture} />
        <div className="card-body">
    <h5 className="card-title">{this.props.name} {this.props.lastname}</h5>
    <h5 className="card-title">{this.props.location.stateUser.user.email}</h5>

          <p className="card-text">
            Rango:  {this.props.location.stateUser.user.isAdmin && <span>Jefe de Equipo</span>} {!this.props.location.stateUser.user.isAdmin && <span>Programador</span>}
          </p>
          <a className="btn btn-primary" onClick={this.toggleShow}>
            <span className="textWhite">Editar usuario</span>
          </a>
        </div>
      </div>

        <div className="modals">
        
        <FormProject show={show}>
          <form onSubmit={this.handleSubmit} className="form">
          <p>Editar Usuario:</p>
          <div>
          <label>Nombre:</label><input type="text" name="name" onChange={this.handleChange} value={this.props.location.stateUser.user.username} />
          </div>
          <div>
          <label>Apellidos:</label><input type="text" name="lastname" onChange={this.handleChange} value={this.props.location.stateUser.user.lastname} />
          </div>
          <div>
          <label>Email:</label><input type="text" name="email" onChange={this.handleChange} value={this.props.location.stateUser.user.email} />
          </div>
          <div className="buttonProject">
              <a href="/" className="btn danger textWhite" onClick={this.toggleShow}>Salir</a>
              <a href="/" className="btn btn-primary" ype="submit" value="Create">Editar</a>
            </div>
          </form>
        </FormProject>
        </div> 
        </div>

    );
  }
}
