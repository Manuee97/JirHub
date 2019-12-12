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
    <TodoCard done={done} >
      <h3>Nombre: {name}</h3>
      <p>Tipo: {type}</p>
      <p>Description: {description}</p>
      <p>Colaboradores: {collaborators}</p>
      <p>Jefe: {boss}</p>

      <p></p>
      <button onClick={toggleTodo}>Ver proyecto</button>
      <button onClick={toggleTodo}>Editar proyecto</button>
      <button onClick={toggleTodo}>{done ? 'Refresh todo' : 'Finish todo'}</button>
      <button onClick={deleteTodo}>🗑</button>
    </TodoCard>
  )
}
