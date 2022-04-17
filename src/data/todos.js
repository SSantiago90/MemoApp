import axios from 'axios';

export default async function getTodos(limit,offset = 0){
  const todos = await axios.get('https://jsonplaceholder.typicode.com/todos/')
  return limit? todos.data.slice(offset, limit) : todos.data;
};