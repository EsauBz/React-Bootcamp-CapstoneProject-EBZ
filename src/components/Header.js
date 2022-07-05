import Logo from './Logo.js';
import CartLogo from './CartLogo.js';
import Badge from 'react-bootstrap/Badge';

import InputSearch from './InputSearch.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';

const StyledDiv = styled.div`
  background-color: #e0dfd5;
`;

const BadgeCart = styled(Badge)`
  margin: 0 !important;
  padding: 0 !important;
  marginright: 10% !important;
  --bs-bg-opacity: transparentv !important;
  color: black;
`;

const HeaderLink = styled(Link)`
  font-family: Garamond, serif;
  color: black;
  padding: 1%;
  text-decoration: none;
  font-size: 20px;
`;

function Header() {
  const { state } = useCart();

  return (
    <StyledDiv>
      <Logo />

      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/products">Products</HeaderLink>

      <InputSearch />

      <HeaderLink to="/cart">
        <BadgeCart bg="secondary">
          <CartLogo />
          {state.itemsCount}
        </BadgeCart>
      </HeaderLink>
    </StyledDiv>
  );
}

export default Header;
