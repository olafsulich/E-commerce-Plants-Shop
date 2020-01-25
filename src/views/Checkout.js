import React, { useState, useEffect, useContext, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import PlantHalfPage from '../components/molecules/PlantHalfPage';
import Header from '../components/organisms/Header';
import StripeButton from '../components/atoms/Button/StripeButton';
import Loader from '../components/atoms/Loader/Loader';

const CheckoutItem = lazy(() => import('../components/molecules/CheckoutItem'));
const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    overflow: hidden;
  }
`;

const StyledCheckoutSection = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4.3rem;
`;

const StyledCheckoutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const StyledProductsWrapper = styled.div`
  width: 100%;
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  overflow-y: scroll;
  padding: 0 2rem;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.secondaryColor};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primaryColor};
  }
`;
const StyledInfoWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 5rem 15rem 0 0;
`;

const StyledPrice = styled.span`
  align-self: center;
  justify-self: center;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 2rem;
  margin-right: 2rem;
`;

const Checkout = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const { cartItems, addItem, removeItem, cartTotal } = useContext(CartContext);

  const updateDimensions = () => {
    setPageWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  return (
    <StyledWrapper>
      {pageWidth >= 1000 ? (
        <PlantHalfPage isSinglePlant />
      ) : (
        <>
          <Header />
        </>
      )}
      <StyledCheckoutSection>
        <StyledCheckoutWrapper>
          <Suspense fallback={<Loader />}>
            <StyledProductsWrapper>
              {cartItems.length ? (
                cartItems.map(cartItem => (
                  <CheckoutItem
                    plant={cartItem}
                    addItem={addItem}
                    removeItem={removeItem}
                    key={cartItem.plantTitle}
                  />
                ))
              ) : (
                <span>cart is empty</span>
              )}
            </StyledProductsWrapper>
          </Suspense>

          <StyledInfoWrapper>
            <StyledPrice>${cartTotal}</StyledPrice>
            <StripeButton price={cartTotal} />
          </StyledInfoWrapper>
        </StyledCheckoutWrapper>
      </StyledCheckoutSection>
    </StyledWrapper>
  );
};

export default Checkout;
