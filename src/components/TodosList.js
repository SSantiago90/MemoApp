import React, {memo, useCallback} from 'react';
import Todo from './Todo';

function TodosList( { todos, handleDone, handleDelete } ){
  console.log("Render List");

  const handleDoneMemo = useCallback(handleDone);
  const handleDeleteMemo = useCallback(handleDelete);
  return(
    <div>
    {!todos.length && <p>Nothing to do today?</p>}
    {todos.map( elem => 
      <div key={elem.id}>
        <Todo id={elem.id} completed={elem.completed} handleDone={handleDoneMemo} handleDelete={handleDeleteMemo}>
          {elem.title}
        </Todo>
      </div>
    )}
  </div>
  )
}

export default memo(TodosList);
