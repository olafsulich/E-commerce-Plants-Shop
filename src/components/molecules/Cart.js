import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import CartProduct from './CartProduct';
import { CartContext } from '../../context/CartContext';

const StyledWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 5rem;
  right: 1rem;
  width: 20rem;
  height: 24rem;
  border: 2px solid ${({ theme }) => theme.fontColorHeading};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  will-change: opacity, transform;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out;
`;

const StyledProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0rem 0 1rem 0;
  padding: 1rem 0 0 0;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondaryColor};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primaryColor};
  }
`;

const StyledButton = styled(Button)`
  margin: 0 0 1.3rem 0;
  width: 10rem;
  height: 3rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Cart = ({ isVisible }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <StyledWrapper isVisible={isVisible} tabIndex="0">
      <StyledProductsWrapper>
        {cartItems.length ? (
          cartItems.map(cartItem => <CartProduct plant={cartItem} key={cartItem.plantTitle} />)
        ) : (
          <span>cart is empty</span>
        )}
      </StyledProductsWrapper>
      <StyledLink to="/checkout">
        <StyledButton aria-label="Checkout" secondary>
          Checkout
        </StyledButton>
      </StyledLink>
    </StyledWrapper>
  );
};
Cart.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Cart;
