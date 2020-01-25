import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';
import { CartContext } from '../../context/CartContext';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 2.5rem 0.5rem 0 0;
  min-width: 200px;
`;

const StyledProductImage = styled.figure`
  width: 7.5rem;
  height: 5rem;
  margin-right: 0.8rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledInfoWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  margin-right: 1rem;
`;

const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.fontColorHeading};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.regular};
  margin: 0 0 1.5rem 0;
`;
const StyledQuantity = styled.p`
  color: ${({ theme }) => theme.fontColorHeading};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.light};
`;
const StyledButton = styled(Button)`
  margin-left: 2rem;
`;

const CartProduct = ({ plant }) => {
  const { clearItemFromCart } = useContext(CartContext);
  const { plantTitle, plantImage, plantPrice, quantity } = plant;

  return (
    <StyledWrapper>
      <StyledProductImage>
        <img src={plantImage.title} alt="product picure" />
      </StyledProductImage>
      <StyledInfoWrapper>
        <StyledTitle>{plantTitle}</StyledTitle>
        <StyledQuantity>
          {quantity} x ${plantPrice}
        </StyledQuantity>
      </StyledInfoWrapper>
      <StyledButton remove onClick={() => clearItemFromCart(plant)} />
    </StyledWrapper>
  );
};
CartProduct.propTypes = {
  plant: PropTypes.object.isRequired,
};
export default React.memo(CartProduct);
