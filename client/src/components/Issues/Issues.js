import React from 'react'
import TodoCard from './TodoStyles'
import IssusService from '../../services/IssuesService'

export default function Todo({ id, name, description, done, updateTodos, type, assigned, creator, isFinish, idProject }) {
  const service = new IssusService()
  const toggleTodo = () => {
    service.updateTodo(id, !done)
    .then(() => {
      updateTodos()
    })
  }
  const deleteTodo = () => {
    service.deleteTodo(id)
    .then(() => {
      updateTodos()
    })
  }
  return (
    <div className="col-sm-5 margin-project">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
        <p className="card-text">{description}</p>
        <a href={`/issues/${id}`} className="btn btn-primary">Ver incidencia</a>
        <a href={`/issues/${id}`} className="btn btn-secondary margin-left-btn">Editar incidencia</a>
        <a href="#" onClick={deleteTodo} className="btn btn-danger margin-left-btn">Borrar incidencia</a>
      </div>
    </div>
  </div>


    // <TodoCard done={done} >
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
  )
}
