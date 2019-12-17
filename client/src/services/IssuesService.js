import axios from 'axios';

class IssuesService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/issues`,
      withCredentials: true
    })
  }

  fetchTodos = () => {
    return this.instance.get('/')
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }


  fetchOneTodo = (id) => {
    return this.instance.get(`/${id}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  createTodo = (name, type, description, assigned, creator, isFinish, comentario, idProject ) => {
    return this.instance.post('/new', { name, type, description, assigned, creator, isFinish, comentario, idProject})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  updateTodo = (id, comentariosIssues) => {
    return this.instance.put(`/${id}`, {comentariosIssues})
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }

  deleteTodo = (id) => {
    return this.instance.delete(`/${id}`)
    .then(res => Promise.resolve(res.data))
    .catch(error => console.error(error))
  }
}

export default IssuesService;