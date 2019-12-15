import React from 'react'
import TodoCard from './TodoStyles'
import TodoService from '../../services/TodoService'

export default function Todo({ id, name, description, done, updateTodos, type, collaborators, boss }) {
  const service = new TodoService()
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
        <p className="card-text">{description}</p>
        <p className="card-text">{boss}</p>
        <a href={`/todos/${id}`} className="btn btn-primary">Ver proyecto</a>
        <a href={`/todos/${id}`} className="btn btn-secondary margin-left-btn">Editar proyecto</a>
        <a href="#" onClick={deleteTodo} className="btn btn-danger margin-left-btn">Borrar proyecto</a>
      </div>
    </div>
  </div>




    // <TodoCard done={done} >
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
  )
}
