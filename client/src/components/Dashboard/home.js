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
    return (
      <div className="fake">

        <img className="fakeImg" src="https://res.cloudinary.com/duczhwe2w/image/upload/v1576852327/dashboard-free-psd_aujbpn.jpg" alt=""/>
        
      </div>


    );
  }
}
