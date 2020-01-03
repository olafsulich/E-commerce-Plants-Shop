import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import CartProduct from './CartProduct';

const StyledWrapper = styled.div`
  position: absolute;
  top: 5rem;
  right: 1rem;
  width: 20rem;
  height: 24rem;
  border: 2px solid ${({ theme }) => theme.fontColorHeading};
  background-color: #fff;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  will-change: opacity, transform;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
`;

const StyledProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Cart = ({ isVisible }) => (
  <StyledWrapper isVisible={isVisible}>
    <StyledProductsWrapper>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </StyledProductsWrapper>
    <StyledButton secondary>Checkout</StyledButton>
  </StyledWrapper>
);
Cart.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Cart;
