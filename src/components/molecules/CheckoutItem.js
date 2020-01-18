import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';

import { CartContext } from '../../context/CartContext';

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: start;
  justify-content: start;
  z-index: 10;
  padding: 1.5rem 0.5rem 0 0;
  grid-column-gap: 1.5rem;
`;

const StyledProductImage = styled.figure`
  width: 7.5rem;
  height: 5rem;

  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width: 500px) {
    width: 8.5rem;
  }
  @media only screen and (min-width: 800px) {
    width: 9rem;
  }
`;

const StyledTitle = styled.h3`
  align-self: center;
  justify-self: center;
  color: ${({ theme }) => theme.fontColorHeading};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.light};
  @media only screen and (min-width: 500px) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 800px) {
    font-size: 1.6rem;
  }
`;
const StyledQuantityWrapper = styled.div`
  align-self: center;
  justify-self: center;
  display: flex;
`;

const StyledQuantityValue = styled.span`
  align-self: center;
  padding: 0 1rem;
  color: ${({ theme }) => theme.fontColorHeading};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.regular};
  @media only screen and (min-width: 500px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const StyledPrice = styled.span`
  align-self: center;
  justify-self: center;
  font-weight: ${({ theme }) => theme.regular};
  font-size: 1.2rem;
  @media only screen and (min-width: 500px) {
    font-size: 1.4rem;
  }
  @media only screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const CheckoutItem = ({ plant }) => {
  const { plantTitle, plantImage, plantPrice, quantity } = plant;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <StyledWrapper>
      <StyledProductImage>
        <img src={plantImage.title} alt="pic" />
      </StyledProductImage>
      <StyledTitle>{plantTitle}</StyledTitle>
      <StyledQuantityWrapper>
        <Button quantity onClick={() => removeItem(plant)}>
          &#10094;
        </Button>
        <StyledQuantityValue>{quantity}</StyledQuantityValue>
        <Button quantity onClick={() => addItem(plant)}>
          &#10095;
        </Button>
      </StyledQuantityWrapper>
      <StyledPrice>${plantPrice}</StyledPrice>
      <Button remove onClick={() => clearItemFromCart(plant)} />
    </StyledWrapper>
  );
};

CheckoutItem.propTypes = {
  plant: PropTypes.object.isRequired,
};
export default React.memo(CheckoutItem);
