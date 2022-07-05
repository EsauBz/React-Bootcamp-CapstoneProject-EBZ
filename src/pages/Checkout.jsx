import CheckOutForm from '../components/CheckoutForm';
import OrderSummaryTable from '../components/OrderSummaryTable';
import { useCart } from '../context/CartContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonLink = styled(Link)`
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

const Checkout = () => {
    const { state } = useCart();
    const { items: cartItems } = state;

    const checkOutHandler = (data, e) => {
        const {
            customerName,
            customerEmail,
            customerOrderNotes,
            customerZipCode,
        } = data;
    };

    return (
        <>
            <OrderSummaryTable items={cartItems} />
            <CheckOutForm checkOutHandler={checkOutHandler} />
            <ButtonLink to="/cart">Go back to cart</ButtonLink>
        </>
    );
};
  
export default Checkout;