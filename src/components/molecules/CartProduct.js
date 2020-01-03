import React from 'react';
import styled from 'styled-components';
import ProductPicutre from '../../assets/images/pawel-czerwinski-7EuUsw99KhE-unsplash.jpg';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  padding: 1rem 0.5rem 0 0;
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
const StyledQuentity = styled.p`
  color: ${({ theme }) => theme.fontColorHeading};
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.light};
`;

const CartProduct = () => (
  <StyledWrapper>
    <StyledProductImage>
      <img src={ProductPicutre} alt="product picure" />
    </StyledProductImage>
    <StyledInfoWrapper>
      <StyledTitle>Orhidea Tree</StyledTitle>
      <StyledQuentity>5x$78</StyledQuentity>
    </StyledInfoWrapper>
  </StyledWrapper>
);

export default CartProduct;
