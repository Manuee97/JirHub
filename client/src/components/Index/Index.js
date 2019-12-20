import React, { Component } from "react";
import AuthService from "../../services/AuthService";
import Logo from './Logo';


export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.authService = new AuthService();
  }

  state = {
    username: "",
    lastname: "",
    email: "",
    show: false,
    password: "",
    picture: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };
  handleIndex = e => {
    e.preventDefault();
    const { history, setUser } = this.props;
    this.authService.index(this.state).then(
      user => {
        setUser(user);
        history.push("/");
      },
      error => {
        console.error(error);
      }
    );
  };

  handleUpload = e => {
    const uploadData = new FormData();
    uploadData.append("picture", e.target.files[0]);
    this.authService.upload(uploadData).then(
      data => {
        this.setState({ ...this.state, picture: data.secure_url });
      },
      error => {
        console.error(error);
      }
    );
  };

  toggleShow = () => {
    const { show } = this.state;
    this.setState({...this.state, show: !show})
  }

  Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <svg className="intro" viewBox="0 0 200 86">
          <a className="nav-link" href="/">
            <text
              textAnchor="start"
              x="10"
              y="30"
              className="text text-stroke"
              clipPath="url(#text1)"
            >
              JirHub
            </text>

            <text
              textAnchor="start"
              x="10"
              y="30"
              className="text text-stroke text-stroke-2"
              clipPath="url(#text1)"
            >
              JirHub
            </text>
          </a>

          <defs>
            <clipPath id="text1">
              <text textAnchor="start" x="10" y="30" className="text">
                JirHub
              </text>
            </clipPath>
          </defs>
        </svg>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
                <p className="userNav">Hola, {loggedInUser.username}</p>
            </li>
            <li className="nav-item">
              <!-- <a class="nav-link" href="/coasters">Montañas rusas</a> -->
            </li>
            <li className="nav-item">
              <!-- <a class="nav-link" href="/parks">Parques</a> -->
            </li>  */}
          </ul>
        </div>
      </nav>
    );
  };

  render() {
    const { show } = this.state;

    return (
      <div className="marginIndex">

<Logo show={show}>
          <div>
         <div className="fontLogo">
         JirHub
         </div>
          </div>
        </Logo>
                {this.Navbar()}
      <div className="containerIndex">
        <div className="text-svg">
          <svg
            viewBox="-15 20 750 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path id="path">
              <animate
                attributeName="d"
                from="m0,110 h0"
                to="m0,110 h1100"
                dur="6.8s"
                begin="0s"
                repeatCount="indefinite"
              />
            </path>
            <text
              fontSize="20"
              fontFamily="Montserrat"
              fill="hsl(360, 100%, 100%)"
            >
              <textPath xlinkHref="#path">
                A more precise way to define the workflow and manage daily
                tasks.
              </textPath>
            </text>
          </svg>
        </div>
        <div className="buttons">
          <a href="/login">
            <button className="btn btn-link btnl">Log in</button>
          </a>
          <a href="/signup">
            <button className="btn btn-link btnl">Sign Up</button>
          </a>
        </div>
        <div className="footer">
          <p>JirHub creado por un <a href="https://www.linkedin.com/in/manuelalvarezrosado/">IronHacker</a> con <button className="heart" onClick={this.toggleShow}>
          ♥</button></p>
        </div>
      </div>
      </div>
    );
  }
}
