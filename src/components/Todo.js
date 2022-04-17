import React, {memo}  from 'react';
import styled from 'styled-components';
import TrashIconSVG from './TrashIconSVG';

const Wrapper = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-between;
    margin-bottom:10px;
    padding: 10px 15px;
    border: solid thin rgba(205,160,255,0.5);
    border-radius: 25px;
    align-items: center;
    cursor: pointer;
    z-index: 1;
  `;

const CloseBtn = styled.button`
    border-radius: 25px;
    font-weight: 200;
    align-self: flex-end;
    margin-left: 3px;
    opacity: 0.8;

    &:hover{
      opacity: 1;
      
    outline: solid thin rgba(205,160,255,0.5);
    }
  `;

const BtnGroup = styled.div`
    align-self: center;
    display: flex;
    align-items: center;
    min-width: 105px;
    z-index: 2;
  `;
  
const TodoText = styled.span`
  color: ${(props) => (props.completed ? '#845bb9' : '#d8d8d8')}; 
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')}; 
  display: flex;
  align-items: center;
`;

function Todo({ id, completed, children, handleDone, handleDelete }) {
  console.log("Render Todo", id);

  let doneText = completed ? 'Reset' : 'Done';
  function handleClick(evt) {
    evt.stopPropagation();
    handleDone(id);
  }

  function handleDeleteClick(evt) {
    evt.stopPropagation();
    handleDelete(id);
  }

  return (
    <Wrapper onClick={handleClick}>
      <TodoText completed={completed}>{children}</TodoText>
      <BtnGroup>
        <CloseBtn onClick={handleClick}>{doneText}</CloseBtn>
        <CloseBtn onClick={handleDeleteClick}>
          <TrashIconSVG size={'12'} />
        </CloseBtn>
      </BtnGroup>
    </Wrapper>
  );
}

export default memo(Todo)