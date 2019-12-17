import React from 'react'
import TodoService from '../../services/TodoService'

export default function Todo({ id, name, description, updateTodos, boss }) {
  const service = new TodoService()

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
        <p className="card-text">{description}</p>
        <p className="card-text">{boss}</p>
        <a href={`/todos/${id}`} className="btn btn-primary">Ver proyecto</a>
        <a href={`/todos/${id}`} className="btn btn-secondary margin-left-btn">Editar proyecto</a>
        <a href="#" onClick={deleteTodo} className="btn btn-danger margin-left-btn">Borrar proyecto</a>
      </div>
    </div>
  </div>

  )
}
