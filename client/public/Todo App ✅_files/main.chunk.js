(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:700);", ""]);
// Module
exports.push([module.i, "/* .App {\n  background: #f7f7f7;\n  min-height: 100vh;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.todos-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  width: 80%;\n  margin: 0 auto;\n}\n\nimg {\n  object-fit: cover;\n  width: 200px;\n}\n\n.container {\n  width: 80%;\n  margin: 0 auto;\n  padding: 5% 0;\n}\n\n.show-button{\n  margin-top: 20px;\n  padding: 1% 3%;\n  border-width: 0;\n  outline: none;\n  border-radius: 2px;\n  color: black;\n  margin-right: 10px;\n  transition: background-color .3s;\n  background-color: #2ecc71;\n  color: #ecf0f1;\n}\n\n.show-button:hover, .show-button:focus {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n} */\n\n\nbody {\n  font: 14px sans-serif; }\n\na {\n  color: #00B7FF; }\n\n.navbar {\n  padding: 15px;\n  background: #0946a6;\n}\n\n.containerIndex {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n  text-align: center;\n  width: 100vw;\n  height: calc(100vh - 62px);\n  background: #0946a6;\n}\n\n  /* Principio logo */ \n.coasters-index .btn {\n  float: right; }\n\n  svg.intro {\n    margin-top: 30px;\n    max-width: 300px;\n    position: absolute;\n  }\n  svg.intro .text {\n    display: none;\n  }\n  svg.intro.go .text {\n    letter-spacing: 3px;\n    font-family: Arial, sans-serif;\n    font-size: 24px;\n    display: block;\n  }\n  svg.intro.go .text-stroke {\n    fill: none;\n    stroke: #0650b5;\n    stroke-width: 2.8px;\n    stroke-dashoffset: -900;\n    stroke-dasharray: 900;\n    stroke-linecap: butt;\n    stroke-linejoin: round;\n    animation: dash 1.8s ease-in-out forwards;\n  }\n  svg.intro.go .text-stroke:nth-child(2) {\n    animation-delay: 0.4s;\n  }\n  svg.intro.go .text-stroke:nth-child(3) {\n    animation-delay: 3.9s;\n  }\n  svg.intro.go .text-stroke-2 {\n    stroke: white;\n    animation-delay: 3.9s;\n  }\n  @keyframes dash {\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n  \n  \n/* Fin logo */\n\n.btnl {\n  margin-top: 30%;\n  width: 220px;\n  height: 50px;\n  border: 2px solid white;\n  font-style: none;\n  color: white;\n  text-decoration:none;\n}\n\n.buttons a:last-child {\n  margin-left: 30px;\n}\n\n.btnl:hover{\n  background: white;\n  border: 2px solid white;\n  font-style: none;\n  color: black;\n  text-decoration:none;\n}\n\n.text-svg {\n  margin-bottom: 80px;\n  width: 75vw;\n}\n\n\n/* ------ Register and Login ------*/\n.containerRegister {\n  width: 100vw;\n  height: calc(100vh - 48px);\n  background: #0946a6;\n}\n\n.login-page {\n  width: 360px;\n  padding: 4% 0 0;\n  margin: auto;\n}\n.form {\n  position: relative;\n  z-index: 1;\n  background: #FFFFFF;\n  max-width: 360px;\n  margin: 0 auto;\n  padding: 30px 45px 45px 45px;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\n}\n.form input {\n  font-family: \"Roboto\", sans-serif;\n  outline: 0;\n  background: #f2f2f2;\n  width: 100%;\n  border: 0;\n  margin: 0 0 15px;\n  padding: 15px;\n  box-sizing: border-box;\n  font-size: 14px;\n}\n.form button {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background:#0946a6;\n  width: 100%;\n  border: 0;\n  padding: 15px;\n  color: #FFFFFF;\n  font-size: 14px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n}\n.form button:hover,.form button:active,.form button:focus {\n  background: #002765;\n}\n.form .message {\n  margin: 15px 0 0;\n  color: #b3b3b3;\n  font-size: 12px;\n}\n.form .message a {\n  color: #0946a6;\n  text-decoration: none;\n}\n.container {\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n  margin: 0 auto;\n}\n.container:before, .container:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n/* ---- dashboard ------ */\n\n.container-dashboard {\ndisplay: flex;\n}\n\n.container-dashboard .menu {\n  width: 6vw;\n  height: calc(100vh - 48px);\n  background: #0946a6;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n}\n\n.container-dashboard .contenido {\n  padding: 20px;\nbackground: white;\nwidth: 94vw;\n}\n\n/* Iconos */\n\n.container-dashboard .menu a{\n  color: white;\n  text-decoration: none;\n margin-top: 33px;\n}\n\n.itemFont {\ncolor: white;\nsize:  20px;\n\n}\n\n.itemMenu {\nwidth: 30px;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\ntext-align: center;\n}\n\n\n.h2center {\ntext-align: center;\nmargin-bottom: 30px;\n}\n\n.footer{\n  font-size: 17px;\n  color: white;\n  margin-top: 33vh;\n}\n\n.heart{\n  color:red\n}\n\n.margin-project {\n  padding: 20px;\n}\n\n.btn-primary {\n  background-color: #0946a6;\n}\n.margin-left-btn {\n  margin-left: 30px;\n}", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n", ""]);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_TodoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/TodoService */ "./src/services/TodoService.js");
/* harmony import */ var _components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/TodoList/TodoList */ "./src/components/TodoList/TodoList.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Login_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Login/Login */ "./src/components/Login/Login.js");
/* harmony import */ var _components_Signup_Signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Signup/Signup */ "./src/components/Signup/Signup.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/AuthService */ "./src/services/AuthService.js");
/* harmony import */ var _components_Index_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Index/Index */ "./src/components/Index/Index.js");
/* harmony import */ var _guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/PrivateRoute */ "./src/guards/PrivateRoute.js");
/* harmony import */ var _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Dashboard/dashboard */ "./src/components/Dashboard/dashboard.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/App.js";












class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };

    this.setUser = user => {
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        user
      }));
    };

    this.fetchUser = () => {
      if (this.state.user === null) {
        this.authService.loggedInUser().then(user => {
          this.setUser(user);
        }, error => {
          this.setUser(false);
        }).catch(() => {
          this.setUser(false);
        });
      }
    };

    this.todoService = new _services_TodoService__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_8__["default"]();
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    this.fetchUser();
    const user = this.state.user;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, user && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/login",
      render: match => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, match, {
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/signup",
      render: match => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Signup_Signup__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, match, {
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/logout",
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/prueba",
      user: user,
      component: _components_TodoList_TodoList__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/project",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/users",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/logs",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/settings",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/todos/:id",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_guards_PrivateRoute__WEBPACK_IMPORTED_MODULE_10__["default"], {
      exact: true,
      path: "/issues/:id",
      user: user,
      component: _components_Dashboard_dashboard__WEBPACK_IMPORTED_MODULE_11__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), !user && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/login",
      render: match => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Login_Login__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, match, {
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/signup",
      render: match => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Signup_Signup__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, match, {
        setUser: this.setUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/logout",
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Route"], {
      exact: true,
      path: "/",
      component: _components_Index_Index__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Dashboard/CreateTodoStyles.js":
/*!******************************************************!*\
  !*** ./src/components/Dashboard/CreateTodoStyles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  display: ${props => props.show === true ? 'flex' : 'none'} ;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  padding: 5% 0;
  .submit-button{
    padding: 1% 3%;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    color: black;
    margin-right: 10px;
    transition: background-color .3s;
    background-color: #2ecc71;
    color: #ecf0f1;
  }

  .submit-button:hover, .submit-button:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  }

  div {
    margin-bottom: 5%;
    
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ }),

/***/ "./src/components/Dashboard/dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/Dashboard/dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/components/Dashboard/home.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./src/components/Dashboard/project.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users */ "./src/components/Dashboard/users.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log */ "./src/components/Dashboard/log.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings */ "./src/components/Dashboard/settings.js");
/* harmony import */ var _detailsProject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detailsProject */ "./src/components/Dashboard/detailsProject.js");
/* harmony import */ var _detailsIssues__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detailsIssues */ "./src/components/Dashboard/detailsIssues.js");
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/dashboard.js";












class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.logoutUser = () => {
      this._service.logout().then(x => this.props.setUser(false)).catch(err => console.log(err));
    };

    this._service = new _services_AuthService__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  render() {
    // const { username, password } = this.state;
    const loggedInUser = this.props.loggedInUser;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-home fa-2x itemFont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-tasks fa-2x itemFont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), "Project")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/users",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-user fa-2x itemFont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), "User")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/logs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-rss fa-2x itemFont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), "Log")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-cogs fa-2x itemFont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "/",
      onClick: this.logoutUser,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "itemMenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-sign-out-alt fa-2x itemFont",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), "Logout"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_home__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: loggedInUser.username,
        lastname: loggedInUser.lastname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/project",
      exact: true,
      component: _project__WEBPACK_IMPORTED_MODULE_4__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/users",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_5__["default"], {
        name: loggedInUser.username,
        lastname: loggedInUser.lastname,
        email: loggedInUser.email,
        id: loggedInUser.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/logs",
      exact: true,
      component: _log__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/settings",
      render: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: loggedInUser.username,
        lastname: loggedInUser.lastname,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/todos/:id",
      exact: true,
      component: _detailsProject__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Route"], {
      exact: true,
      path: "/issues/:id",
      exact: true,
      component: _detailsIssues__WEBPACK_IMPORTED_MODULE_10__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Dashboard));

/***/ }),

/***/ "./src/components/Dashboard/detailsIssues.js":
/*!***************************************************!*\
  !*** ./src/components/Dashboard/detailsIssues.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_IssuesService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/IssuesService */ "./src/services/IssuesService.js");
/* harmony import */ var _Issues_Issues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Issues/Issues */ "./src/components/Issues/Issues.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/detailsIssues.js";





class DetailsIssues extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.issuesService.fetchOneTodo(this.props.match.params.id).then(users => {
        this.setState({
          users: [users]
        });
      });
    };

    this.state = {
      users: [],
      name: '',
      type: '',
      description: '',
      assigned: '',
      show: false,
      creator: '',
      isFinish: '',
      idProject: '',
      issues: null
    };
    this.issuesService = new _services_IssuesService__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contenido",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, this.state.users.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Nombre de la incidencia: ", item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Tipo: ", item.type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Description: ", item.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Asignado: ", item.assigned), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Creador: ", item.creator), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Proyecto: ", item.idProject), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Finalizada: ", item.isFinish));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DetailsIssues);

/***/ }),

/***/ "./src/components/Dashboard/detailsProject.js":
/*!****************************************************!*\
  !*** ./src/components/Dashboard/detailsProject.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateTodoStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTodoStyles */ "./src/components/Dashboard/CreateTodoStyles.js");
/* harmony import */ var _services_IssuesService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/IssuesService */ "./src/services/IssuesService.js");
/* harmony import */ var _Issues_Issues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Issues/Issues */ "./src/components/Issues/Issues.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");
/* harmony import */ var _services_TodoService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/TodoService */ "./src/services/TodoService.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/detailsProject.js";







class DetailsProject extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.updateTodos();
      this.todoService.fetchOneTodo(this.props.match.params.id).then(users => {
        this.setState({
          users: [users]
        });
      });
    };

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [name]: value
      }));
    };

    this.updateCollaborators = e => {
      const arr = [...this.state.collaborators];
      const value = e.target.value;
      arr.push(value);
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        collaborators: arr
      }));
    };

    this.handleSubmit = e => {
      const _this$state = this.state,
            name = _this$state.name,
            type = _this$state.type,
            description = _this$state.description,
            assigned = _this$state.assigned,
            creator = _this$state.creator,
            isFinish = _this$state.isFinish,
            idProject = _this$state.idProject;
      e.preventDefault();
      this.issuesService.createTodo({
        name,
        type,
        description,
        assigned,
        creator,
        isFinish,
        idProject
      }).then(() => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          name: '',
          type: '',
          description: '',
          assigned: '',
          creator: '',
          isFinish: '',
          idProject: ''
        }));
        this.updateTodos();
      }, error => console.error(error));
    };

    this.displayTodos = () => {
      const issues = this.state.issues;
      return issues.map((issue, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Issues_Issues__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
        key: i
      }, issue, {
        updateTodos: this.updateTodos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })));
    };

    this.updateTodos = () => {
      this.issuesService.fetchTodos().then(issues => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          issues
        }));
      }, error => {
        const message = error.message;
        console.error(message);
      });
    };

    this.toggleShow = () => {
      const show = this.state.show;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        show: !show
      }));
    };

    this.state = {
      users: [],
      name: '',
      type: '',
      description: '',
      assigned: '',
      show: false,
      creator: '',
      isFinish: '',
      idProject: '',
      issues: null
    };
    this.issuesService = new _services_IssuesService__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.todoService = new _services_TodoService__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }

  render() {
    const _this$state2 = this.state,
          name = _this$state2.name,
          type = _this$state2.type,
          description = _this$state2.description,
          assigned = _this$state2.assigned,
          creator = _this$state2.creator,
          isFinish = _this$state2.isFinish,
          idProject = _this$state2.idProject,
          show = _this$state2.show,
          issues = _this$state2.issues;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "contenido",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, this.state.users.map(item => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Nombre del proyecto: ", item.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Tipo: ", item.type), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Description: ", item.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "Colaboradores: ", item.collaborators), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, "Jefe: ", item.boss));
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "show-button",
      onClick: this.toggleShow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Crear Incidencia"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateTodoStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: this.handleSubmit,
      show: show,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Create todo:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Todo Name:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.handleChange,
      value: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Tipo:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "type",
      onChange: this.handleChange,
      value: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "Description:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.handleChange,
      value: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "assigned",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Asignado:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "assigned",
      onChange: this.handleChange,
      value: assigned,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "creator",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Creador:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "creator",
      onChange: this.handleChange,
      value: creator,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "isFinish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "Finish:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "isFinish",
      onChange: this.handleChange,
      value: isFinish,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "idProject",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Proyecto:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "idProject",
      onChange: this.handleChange,
      value: idProject,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      value: "Create",
      className: "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "todos-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, issues && this.displayTodos(), !issues && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "Loading..."))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DetailsProject);

/***/ }),

/***/ "./src/components/Dashboard/home.js":
/*!******************************************!*\
  !*** ./src/components/Dashboard/home.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/home.js";

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    // const { username, password } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contenido",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Hola bienvenido ", this.props.name, " ", this.props.lastname, " ", this.props.email));
  }

}

/***/ }),

/***/ "./src/components/Dashboard/log.js":
/*!*****************************************!*\
  !*** ./src/components/Dashboard/log.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/log.js";

class Logs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    // const { username, password } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contenido",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Aqu\xED intentar\xE9 poner las acciones que haga cada usuario"));
  }

}

/***/ }),

/***/ "./src/components/Dashboard/project.js":
/*!*********************************************!*\
  !*** ./src/components/Dashboard/project.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _CreateTodoStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTodoStyles */ "./src/components/Dashboard/CreateTodoStyles.js");
/* harmony import */ var _services_TodoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/TodoService */ "./src/services/TodoService.js");
/* harmony import */ var _Todo_Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Todo/Todo */ "./src/components/Todo/Todo.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/project.js";





class Project extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.updateTodos();
      this.authService.allUsers().then(users => {
        console.log(users);
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.setState, {
          users: users.user
        }));
      });
    };

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [name]: value
      }));
    };

    this.updateCollaborators = e => {
      const arr = [...this.state.collaborators];
      const value = e.target.value;
      arr.push(value);
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        collaborators: arr
      }));
    };

    this.handleSubmit = e => {
      const _this$state = this.state,
            name = _this$state.name,
            description = _this$state.description,
            type = _this$state.type,
            collaborators = _this$state.collaborators,
            boss = _this$state.boss;
      e.preventDefault();
      this.todoService.createTodo({
        name,
        description,
        type,
        collaborators,
        boss
      }).then(() => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          name: '',
          description: '',
          type: '',
          collaborators: '',
          boss: ''
        }));
        this.updateTodos();
      }, error => console.error(error));
    };

    this.displayTodos = () => {
      const todos = this.state.todos;
      return todos.map((todo, i) => react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Todo_Todo__WEBPACK_IMPORTED_MODULE_3__["default"], Object.assign({
        key: i
      }, todo, {
        updateTodos: this.updateTodos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })));
    };

    this.updateTodos = () => {
      this.todoService.fetchTodos().then(todos => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          todos
        }));
      }, error => {
        const message = error.message;
        console.error(message);
      });
    };

    this.toggleShow = () => {
      const show = this.state.show;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        show: !show
      }));
    };

    this.state = {
      users: [],
      collaborators: [],
      name: '',
      description: '',
      show: false,
      type: '',
      boss: '',
      todos: null
    };
    this.todoService = new _services_TodoService__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_5__["default"]();
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    const _this$state2 = this.state,
          name = _this$state2.name,
          description = _this$state2.description,
          show = _this$state2.show,
          todos = _this$state2.todos,
          type = _this$state2.type,
          collaborators = _this$state2.collaborators,
          boss = _this$state2.boss;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "contenido",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Proyectos"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      className: "btn btn-primary",
      onClick: this.toggleShow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Crear Proyecto"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_CreateTodoStyles__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onSubmit: this.handleSubmit,
      show: show,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Create todo:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Todo Name:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.handleChange,
      value: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "Tipo:"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      name: "type",
      onChange: this.handleChange,
      value: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Description:"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.handleChange,
      value: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "collaboratos",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Colaboradores:"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("select", {
      multiple: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, this.state.users.map(user => {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("option", {
        onClick: this.updateCollaborators,
        value: user.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, user.username);
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
      htmlFor: "boss",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "Jefe:"), " ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "text",
      name: "boss",
      onChange: this.handleChange,
      value: boss,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
      type: "submit",
      value: "Create",
      className: "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "contenido",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, todos && this.displayTodos(), !todos && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Loading..."))));
  }

}

/***/ }),

/***/ "./src/components/Dashboard/settings.js":
/*!**********************************************!*\
  !*** ./src/components/Dashboard/settings.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/settings.js";


class Settings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "card-img-top",
      src: this.props.picture,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, this.props.name, " ", this.props.lastname), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "card-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, this.props.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "card-text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "Rango:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      className: "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Editar usuario")));
  }

} // username: { type: String, required: true, unique: true },
// lastname: { type: String, required: true },
// email:    { type: String, required: true },
// password: { type: String, required: true, minlength: 2 },
// picture:  { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
// isAdmin:  { type: Boolean, default: true }

/***/ }),

/***/ "./src/components/Dashboard/users.js":
/*!*******************************************!*\
  !*** ./src/components/Dashboard/users.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Dashboard/users.js";




class Users extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.authService.allUsers().then(users => {
        console.log(users);
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.setState, {
          users: users.user
        }));
      });
    };

    this.state = {
      users: []
    };
    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      style: {
        marginLeft: "7em",
        marginTop: "1em"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      as: "h1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Users")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      style: {
        width: "70%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Nombre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Apellidos"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "ID"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, this.state.users.map(user => {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, user.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, user.lastname), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, user.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, user.id));
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./src/components/Index/Index.js":
/*!***************************************!*\
  !*** ./src/components/Index/Index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Index/Index.js";


class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: "",
      password: "",
      picture: ""
    };

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [name]: value
      }));
    };

    this.handleIndex = e => {
      e.preventDefault();
      const _this$props = this.props,
            history = _this$props.history,
            setUser = _this$props.setUser;
      this.authService.index(this.state).then(user => {
        setUser(user);
        history.push("/");
      }, error => {
        console.error(error);
      });
    };

    this.handleUpload = e => {
      const uploadData = new FormData();
      uploadData.append("picture", e.target.files[0]);
      this.authService.upload(uploadData).then(data => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          picture: data.secure_url
        }));
      }, error => {
        console.error(error);
      });
    };

    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "containerIndex",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "text-svg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      viewBox: "-15 20 750 100",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      version: "1.1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      id: "path",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("animate", {
      attributeName: "d",
      from: "m0,110 h0",
      to: "m0,110 h1100",
      dur: "6.8s",
      begin: "0s",
      repeatCount: "indefinite",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
      fontSize: "20",
      fontFamily: "Montserrat",
      fill: "hsl(360, 100%, 100%)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textPath", {
      xlinkHref: "#path",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "A more precise way to define the workflow and manage daily tasks.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "buttons",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-link btnl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Log in")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn btn-link btnl",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "JirHub creado por un ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.linkedin.com/in/manuelalvarezrosado/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "IronHacker"), " con  ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "heart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, " \u2665"))));
  }

}

/***/ }),

/***/ "./src/components/Issues/Issues.js":
/*!*****************************************!*\
  !*** ./src/components/Issues/Issues.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TodoStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoStyles */ "./src/components/Issues/TodoStyles.js");
/* harmony import */ var _services_IssuesService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/IssuesService */ "./src/services/IssuesService.js");
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Issues/Issues.js";



function Todo({
  id,
  name,
  description,
  done,
  updateTodos,
  type,
  assigned,
  creator,
  isFinish,
  idProject
}) {
  const service = new _services_IssuesService__WEBPACK_IMPORTED_MODULE_2__["default"]();

  const toggleTodo = () => {
    service.updateTodo(id, !done).then(() => {
      updateTodos();
    });
  };

  const deleteTodo = () => {
    service.deleteTodo(id).then(() => {
      updateTodos();
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 margin-project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `/issues/${id}`,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Ver incidencia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `/issues/${id}`,
    className: "btn btn-secondary margin-left-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Editar incidencia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: deleteTodo,
    className: "btn btn-danger margin-left-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Borrar incidencia")))) // <TodoCard done={done} >
  //   <h3>Nombre: {name}</h3>
  //   <p>Tipo: {type}</p>
  //   <p>Description: {description}</p>
  //   <p>Asignado: {assigned}</p>
  //   <p>Creador: {creator}</p>
  //   <p>Finalizado: {isFinish}</p>
  //   <p>Proyecto: {idProject}</p>
  //   <p></p>
  //   <a href={`/issues/${id}`}>Ver incidencia</a>
  //   <button onClick={toggleTodo}>Editar incidencia</button>
  //   <button onClick={toggleTodo}>{done ? 'Refresh todo' : 'Finish todo'}</button>
  //   <button onClick={deleteTodo}>🗑</button>
  // </TodoCard>
  ;
}

/***/ }),

/***/ "./src/components/Issues/TodoStyles.js":
/*!*********************************************!*\
  !*** ./src/components/Issues/TodoStyles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const TodoCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 45%;
  margin-bottom: 2%;
  background: #fff;
  border-radius: 2px;
  border: ${props => props.done === true ? '1px solid green' : '1px solid red'};
  padding: 2%;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  h3 {
    text-decoration: ${props => props.done === true ? 'line-through' : 'none'};
  }

  button{
    padding: 2%;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    color: black;
    margin-right: 10px;
    transition: background-color .3s;
  }

  button:hover, button:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (TodoCard);

/***/ }),

/***/ "./src/components/Login/Login.js":
/*!***************************************!*\
  !*** ./src/components/Login/Login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Login/Login.js";


class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: "",
      password: "",
      picture: ""
    };

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [name]: value
      }));
    };

    this.handleLogin = e => {
      const _this$props = this.props,
            setUser = _this$props.setUser,
            history = _this$props.history;
      e.preventDefault();
      this.authService.login(this.state).then(user => {
        setUser(user);
        history.push("/");
      }, error => {
        console.error(error);
      });
    };

    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  render() {
    const _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "containerRegister",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "login-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "h2center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "login-form",
      onSubmit: this.handleLogin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "Username: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "username",
      value: username,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Password: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "password",
      name: "password",
      value: password,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Login"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Not registered? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Create an account")))))));
  }

}

/***/ }),

/***/ "./src/components/Signup/Signup.js":
/*!*****************************************!*\
  !*** ./src/components/Signup/Signup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/AuthService */ "./src/services/AuthService.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Signup/Signup.js";


class SignUp extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      lastname: "",
      email: "",
      password: "" // picture: ""

    };

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [name]: value
      }));
    };

    this.handleSignUp = e => {
      e.preventDefault();
      const _this$props = this.props,
            history = _this$props.history,
            setUser = _this$props.setUser;
      this.authService.signup(this.state).then(user => {
        setUser(user);
        history.push("/");
      }, error => {
        console.error(error);
      });
    };

    this.handleUpload = e => {
      const uploadData = new FormData();
      uploadData.append('picture', e.target.files[0]);
      this.authService.upload(uploadData).then(data => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          picture: data.secure_url
        }));
      }, error => {
        console.error(error);
      });
    };

    this.authService = new _services_AuthService__WEBPACK_IMPORTED_MODULE_2__["default"]();
  }

  render() {
    const _this$state = this.state,
          username = _this$state.username,
          lastname = _this$state.lastname,
          email = _this$state.email,
          password = _this$state.password,
          isAdmin = _this$state.isAdmin,
          picture = _this$state.picture;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "containerRegister",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "login-page",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "form",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "h2center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
      className: "register-form",
      onSubmit: this.handleSignUp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Username: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "username",
      value: username,
      required: true,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "lastname",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Last Name: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "lastname",
      value: lastname,
      required: true,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "email",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Email: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "email",
      name: "email",
      value: email,
      required: true,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Password: "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "password",
      value: password,
      name: "password",
      required: true,
      onChange: this.handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "file",
      name: "picture",
      onChange: this.handleUpload,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "SignUp"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "message",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Already registered? ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Sign In")))))));
  }

}

/***/ }),

/***/ "./src/components/Todo/Todo.js":
/*!*************************************!*\
  !*** ./src/components/Todo/Todo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Todo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TodoStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoStyles */ "./src/components/Todo/TodoStyles.js");
/* harmony import */ var _services_TodoService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/TodoService */ "./src/services/TodoService.js");
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/Todo/Todo.js";



function Todo({
  id,
  name,
  description,
  done,
  updateTodos,
  type,
  collaborators,
  boss
}) {
  const service = new _services_TodoService__WEBPACK_IMPORTED_MODULE_2__["default"]();

  const toggleTodo = () => {
    service.updateTodo(id, !done).then(() => {
      updateTodos();
    });
  };

  const deleteTodo = () => {
    service.deleteTodo(id).then(() => {
      updateTodos();
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 margin-project",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, boss), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `/todos/${id}`,
    className: "btn btn-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Ver proyecto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: `/todos/${id}`,
    className: "btn btn-secondary margin-left-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Editar proyecto"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    onClick: deleteTodo,
    className: "btn btn-danger margin-left-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Borrar proyecto")))) // <TodoCard done={done} >
  //   <h3>Nombre: {name}</h3>
  //   <p>Tipo: {type}</p>
  //   <p>Description: {description}</p>
  //   <p>Colaboradores: {collaborators}</p>
  //   <p>Jefe: {boss}</p>
  //   <p></p>
  //   <a href={`/todos/${id}`}>Ver proyecto</a>
  //   <button onClick={toggleTodo}>Editar proyecto</button>
  //   <button onClick={toggleTodo}>{done ? 'Refresh todo' : 'Finish todo'}</button>
  //   <button onClick={deleteTodo}>🗑</button>
  // </TodoCard>
  ;
}

/***/ }),

/***/ "./src/components/Todo/TodoStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Todo/TodoStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const TodoCard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div`
  width: 45%;
  margin-bottom: 2%;
  background: #fff;
  border-radius: 2px;
  border: ${props => props.done === true ? '1px solid green' : '1px solid red'};
  padding: 2%;

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  h3 {
    text-decoration: ${props => props.done === true ? 'line-through' : 'none'};
  }

  button{
    padding: 2%;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    color: black;
    margin-right: 10px;
    transition: background-color .3s;
  }

  button:hover, button:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (TodoCard);

/***/ }),

/***/ "./src/components/TodoList/CreateTodoStyles.js":
/*!*****************************************************!*\
  !*** ./src/components/TodoList/CreateTodoStyles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form`
  display: ${props => props.show === true ? 'flex' : 'none'} ;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  padding: 5% 0;
  .submit-button{
    padding: 1% 3%;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    color: black;
    margin-right: 10px;
    transition: background-color .3s;
    background-color: #2ecc71;
    color: #ecf0f1;
  }

  .submit-button:hover, .submit-button:focus {
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  }

  div {
    margin-bottom: 5%;
    
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (FormWrapper);

/***/ }),

/***/ "./src/components/TodoList/TodoList.js":
/*!*********************************************!*\
  !*** ./src/components/TodoList/TodoList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateTodoStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateTodoStyles */ "./src/components/TodoList/CreateTodoStyles.js");
/* harmony import */ var _services_TodoService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/TodoService */ "./src/services/TodoService.js");
/* harmony import */ var _Todo_Todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Todo/Todo */ "./src/components/Todo/Todo.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/components/TodoList/TodoList.js";





class TodoList extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      show: false,
      type: '',
      collaborators: [],
      boss: '',
      todos: null
    };

    this.handleChange = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        [name]: value
      }));
    };

    this.handleSubmit = e => {
      const _this$state = this.state,
            name = _this$state.name,
            description = _this$state.description,
            type = _this$state.type,
            collaborators = _this$state.collaborators,
            boss = _this$state.boss;
      e.preventDefault();
      this.todoService.createTodo({
        name,
        description,
        type,
        collaborators,
        boss
      }).then(() => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          name: '',
          description: '',
          type: '',
          collaborators: '',
          boss: ''
        }));
        this.updateTodos();
      }, error => console.error(error));
    };

    this.displayTodos = () => {
      const todos = this.state.todos; // <Todo key={i} name={todo.name} description={todo.description} done={todo.done} />

      return todos.map((todo, i) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Todo_Todo__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({
        key: i
      }, todo, {
        updateTodos: this.updateTodos,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })));
    };

    this.updateTodos = () => {
      this.todoService.fetchTodos().then(todos => {
        this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          todos
        }));
      }, error => {
        const message = error.message;
        console.error(message);
      });
    };

    this.toggleShow = () => {
      const show = this.state.show;
      this.setState(Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        show: !show
      }));
    };

    this.todoService = new _services_TodoService__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  componentDidMount() {
    this.updateTodos();
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    const _this$state2 = this.state,
          name = _this$state2.name,
          description = _this$state2.description,
          show = _this$state2.show,
          todos = _this$state2.todos,
          type = _this$state2.type,
          collaborators = _this$state2.collaborators,
          boss = _this$state2.boss;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "show-button",
      onClick: this.toggleShow,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, show ? 'Hide form' : 'Show form'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateTodoStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onSubmit: this.handleSubmit,
      show: show,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Create todo:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Todo Name:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "name",
      onChange: this.handleChange,
      value: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Tipo:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.handleChange,
      value: type,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Description:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.handleChange,
      value: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "collaborators",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Colaboradores:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.handleChange,
      value: collaborators,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      htmlFor: "boss",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Jefe:"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "text",
      name: "description",
      onChange: this.handleChange,
      value: boss,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
      type: "submit",
      value: "Create",
      className: "submit-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "todos-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, todos && this.displayTodos(), !todos && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Loading...")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./src/guards/PrivateRoute.js":
/*!************************************!*\
  !*** ./src/guards/PrivateRoute.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrivateRoute; });
/* harmony import */ var _Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/guards/PrivateRoute.js";


function PrivateRoute(_ref) {
  let Component = _ref.component,
      user = _ref.user,
      redirectPath = _ref.redirectPath,
      rest = Object(_Users_manuelalvarezrosado_IRONHACK_Proyecyo_Final_JirHub_client_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "user", "redirectPath"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => {
      {
        if (user) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({
            loggedInUser: user
          }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: this
          }));
        } else {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
            to: {
              pathname: redirectPath
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          });
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_5__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/services/AuthService.js":
/*!*************************************!*\
  !*** ./src/services/AuthService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class AuthService {
  constructor() {
    this.logout = user => {
      return this.instance.post('/logout', user).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.signup = user => {
      return this.instance.post('/signup', user).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.login = user => {
      return this.instance.post('/login', user).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.loggedInUser = () => {
      return this.instance.get('/loggedin').then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.upload = picture => {
      return this.instance.post('/upload', picture).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.allUsers = () => {
      return this.instance.get('/users').then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: `${"http://localhost:3001/api"}/auth`,
      withCredentials: true
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AuthService);

/***/ }),

/***/ "./src/services/IssuesService.js":
/*!***************************************!*\
  !*** ./src/services/IssuesService.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class IssuesService {
  constructor() {
    this.fetchTodos = () => {
      return this.instance.get('/').then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.fetchOneTodo = id => {
      return this.instance.get(`/${id}`).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.createTodo = (name, type, description, assigned, creator, isFinish, idProject) => {
      return this.instance.post('/new', {
        name,
        type,
        description,
        assigned,
        creator,
        isFinish,
        idProject
      }).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.updateTodo = (id, done) => {
      return this.instance.put(`/${id}`, {
        done
      }).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.deleteTodo = id => {
      return this.instance.delete(`/${id}`).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: `${"http://localhost:3001/api"}/issues`,
      withCredentials: true
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IssuesService);

/***/ }),

/***/ "./src/services/TodoService.js":
/*!*************************************!*\
  !*** ./src/services/TodoService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class TodoService {
  constructor() {
    this.fetchTodos = () => {
      return this.instance.get('/').then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.fetchOneTodo = id => {
      return this.instance.get(`/${id}`).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.createTodo = (name, description, type, collaborators, boss) => {
      return this.instance.post('/new', {
        name,
        description,
        type,
        collaborators,
        boss
      }).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.updateTodo = (id, done) => {
      return this.instance.put(`/${id}`, {
        done
      }).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.deleteTodo = id => {
      return this.instance.delete(`/${id}`).then(res => Promise.resolve(res.data)).catch(error => console.error(error));
    };

    this.instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: `${"http://localhost:3001/api"}/todos`,
      withCredentials: true
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TodoService);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/manuelalvarezrosado/IRONHACK/Proyecyo-Final/JirHub/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map