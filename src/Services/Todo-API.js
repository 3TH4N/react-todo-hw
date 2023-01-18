// All of our endpoints
import axios from 'axios'
const baseURL = 'http://localhost:3001/todos'

export const getTodos = () => {
    const URL = baseURL 
    const response = axios.get(URL) 
    return response
}

export const getTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
const URL = `${baseURL}/${id}`
const response = axios.put(URL, updatedTodo)
return response
}

export const createTodo = (todo) => {
    const URL = baseURL
    const response = axios.post(URL, todo)
    return response
}