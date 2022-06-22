import React from 'react';
import styled from 'styled-components';

 const StyledInput = styled.input`
    border: 2px solid #E0DFD5;
    border-radius: 10px;
    height: 5vh;
    width: 17vw;
  `;

  function InputSearch () {
    return (
        <>
         <StyledInput placeholder="Search"/>
        </>
       );
  }

  export default InputSearch;