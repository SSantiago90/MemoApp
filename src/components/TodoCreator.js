import React, { memo } from 'react';
import styled from 'styled-components';
import Button from './UI/Button';

const Wrapper = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom:10px;
    padding: 25px 5px;
    border-radius: 30px;
    align-items: center;
    z-index: 1;
    margin-bottom: 20px;
  `;

const BtnGroup = styled.div`
  align-self: center;
  display: flex;
  justify-content: space-between;
  width: 95%;
  z-index: 2;
`;

function TodoCreator({ handleAdd, todoText, setTodoText }) {
  console.log("Render Creator");

  function handleChange(evt) {
    setTodoText(evt.target.value);
  }


  return (
    <Wrapper>
      <label htmlFor="todo">Add TODO:</label>
      <BtnGroup>
        <input
          onChange={handleChange}
          value={todoText}
          placeholder="Do somehing..."
        />
        <Button handleClick={handleAdd}>Save</Button>
      </BtnGroup>
    </Wrapper>
  )
}

export default memo(TodoCreator);
