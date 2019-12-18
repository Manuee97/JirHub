import React, { Component } from "react";
import FormProject from './FormProject';



export default class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
          show: false
        };
      }
    
      toggleShow = () => {
        const { show } = this.state;
        this.setState({...this.state, show: !show})
      }

  render() {
    const {show} = this.state;
    console.log(this.props)
    return (
      <div className="contenido">

      <h1>Pagina de pruebas mientras me como una pizza</h1>
        <button className="btn btn-primary" onClick={this.toggleShow}>Crear Proyecto</button>
     
      <div className="modals">
        
        <FormProject show={show}>
          <form action="" className="form">
          <p>Create todo:</p>
          <div>
            <label>Todo Name:</label><input type="text" name="name"   />
          </div>
          <button className="btn btn-primary" onClick={this.toggleShow}>Salir</button>
          </form>
          

        </FormProject>
        </div>
        
      </div>


    );
  }
}
