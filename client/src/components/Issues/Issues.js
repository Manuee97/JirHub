import React from 'react'
import TodoCard from './TodoStyles'
import IssusService from '../../services/IssuesService'

export default function Todo({ id, name, description, done, updateTodos, type, assigned, creator, isFinish }) {
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
    <div className="col-sm-10 margin-project">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
        <p className="card-text">{description}</p>
        <div className="issuesRow">
        <a href={`/issues/${id}`} className="btn btn-primary">Ver incidencia</a>
        <a href={`/issues/${id}`} className="btn btn-secondary margin-left-btn">Editar incidencia</a>
        </div>
        <br/>
        <a href="#" onClick={deleteTodo} className="btn btn-danger">Borrar incidencia</a>
      </div>
    </div>
  </div>
  )
}
