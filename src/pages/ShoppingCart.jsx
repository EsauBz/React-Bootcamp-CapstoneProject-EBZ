import CartItems from '../components/CartItems';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap
    color: blue;
    background-color: lightblue;
    border-radius: 40px;
    margin-bottom: 1%;
`;

function ShoppingCart() {
  const { state, dispatch } = useCart();
  const { items: cartItems } = state;

  const handleNumberOfItemsToAdd = (itemId, qty) => {
    const parsedQty = parseInt(qty) || 1;
    dispatch({
      type: 'updateItem',
      payload: {
        id: itemId,
        qty: parsedQty,
      },
    });
  };

  const deleteItemFromCart = (itemId) => {
    dispatch({
      type: 'deleteItem',
      payload: {
        id: itemId,
      },
    });
  };

  return (
    <>
      <CartItems
        items={cartItems}
        handleNumberOfItemsToAdd={handleNumberOfItemsToAdd}
        deleteItemFromCart={deleteItemFromCart}
      />
      <Button to="/checkout">Proceed to checkout</Button>
    </>
  );
};

export default ShoppingCart;
