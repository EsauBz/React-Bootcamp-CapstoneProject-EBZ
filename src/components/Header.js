import Logo from './Logo.js';
import CartLogo from './CartLogo.js';

import InputSearch from './InputSearch.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
  background-color: #e0dfd5;
`;

const HeaderLink = styled(Link)`
  font-family: Garamond, serif;
  color: black;
  padding: 1%;
  text-decoration: none;
  font-size: 20px;
`;

function Header() {
  return (
    <StyledDiv>
      <Logo />

      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/products">Products</HeaderLink>

      <InputSearch />

      <CartLogo />
    </StyledDiv>
  );
}

export default Header;
