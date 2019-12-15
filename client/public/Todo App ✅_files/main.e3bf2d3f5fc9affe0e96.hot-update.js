webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.e3bf2d3f5fc9affe0e96.hot-update.js.map