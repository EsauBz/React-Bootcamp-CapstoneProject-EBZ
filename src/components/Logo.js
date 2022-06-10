import React from 'react';
import styled from 'styled-components';
import logoStore from './images/logoF.png';
import { Link } from 'react-router-dom';

 const StyledImg = styled.img`
    width: 120px;
  `;

  function Logo () {
    return (
        <Link to="/">
         <StyledImg src={logoStore} alt="Store Logo" />
        </Link>
       );
  }

  export default Logo;