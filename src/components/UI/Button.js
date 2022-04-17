import React from 'react';
import styled from 'styled-components';


const StyledBtn = styled.button`
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

function Button({children, handleClick}){
  return (
    <StyledBtn onClick={handleClick}>
      {children}
    </StyledBtn>
  )
}

export default Button;