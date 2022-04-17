import React, { useCallback, useEffect, useState } from 'react';
import getTodos from '../data/todos';
import TodoListMemo from './TodosList';
import TodoCreator from './TodoCreator';
import generateIdFor from '../utils/idGen';

export default function TodosContainer() {
  const TODOS_QTY = 2;
  console.log('Render Container');

  const [todosList, setTodosList] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  function handleDelete(idDelete) {
    setTodosList(todosList.filter(todo => todo.id !== idDelete));
  }

  function handleDone(idDone) {
    const newList = [...todosList];
    const doneTodo = newList.find((todo) => todo.id === idDone);
    doneTodo.completed = !doneTodo.completed;
    setTodosList(newList);
  }

  function handleAdd(){
    const newTodo = {
      userId: 1,
      id: generateIdFor(todosList),
      title: newTodoText, 
      completed: false
    }
    setTodosList([...todosList, newTodo]);
    setNewTodoText('');
  }

  const handleDeleteMemo = useCallback(handleDelete, [todosList]);
  const handleDoneMemo = useCallback(handleDone, [todosList]);
  const handleAddMemo = useCallback(handleAdd, [newTodoText.length]);

  useEffect(() => {
    getTodos(TODOS_QTY).then((todosData) => setTodosList(todosData));
  }, []);

  if (todosList) 
    return (    
      <>  
        <TodoCreator
          handleAdd={handleAddMemo}      
          todoText={newTodoText}
          setTodoText={setNewTodoText}
        />
        <TodoListMemo
          handleDelete={handleDeleteMemo}
          handleDone={handleDoneMemo}
          todos={todosList}
        />
        </>
    )
    else{
      return <h4>Fetching data. . .</h4>
      }      
}
