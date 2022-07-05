import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 50px;
  width: 50px;
  justify-content: flex-end;
  cursor: pointer;
`;

function CartLogo() {
  return (
    <>
      <StyledLogo
        id="cart"
        src={'https://img.icons8.com/stickers/100/undefined/shopping-cart.png'}
        alt="Cart Logo"
      />
    </>
  );
}

export default CartLogo;
