import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import Text from '../atoms/Text/Text';

const StyledWrapper = styled.div`
  z-index: ${({ isVisible }) => (isVisible ? '10' : '-1')};
  position: absolute;
  top: 75%;
  right: 50%;
  transform: translate(50%, ${({ isVisible }) => (isVisible ? '-50%' : '0')});
  width: 24rem;
  height: 13rem;
  border: 2px solid ${({ theme }) => theme.fontColorHeading};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  will-change: opacity, transform;
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  @media only screen and (min-width: 600px) {
    top: 60%;
  }
  @media only screen and (min-width: 1000px) {
    top: 50%;
  }
`;

const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLink = styled(Link)`
  margin: 0 0 0 2rem;
  text-decoration: none;
`;

const StyledButton = styled(Button)`
  width: 8rem;
  height: 3rem;
  text-align: center;
  padding: 0;
`;

const Modal = ({ isVisible, handleModalChange }) => (
  <StyledWrapper isVisible={isVisible}>
    <Text main>Added to cart</Text>
    <StyledButtonsWrapper>
      <StyledButton logoutMain onClick={handleModalChange}>
        Continue
      </StyledButton>
      <StyledLink to="/checkout">
        <Button secondary>Checkout</Button>
      </StyledLink>
    </StyledButtonsWrapper>
  </StyledWrapper>
);
Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleModalChange: PropTypes.func.isRequired,
};
export default Modal;
