import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../atoms/Button/Button';
import CartButton from '../atoms/Button/CartButton';
import LogoutIcon from '../../assets/svg/logout.svg';
import { fire } from '../../firebase/Firebase';
import Loader from '../atoms/Loader/Loader';

const Cart = lazy(() => import('./Cart'));

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;
const StyledLogoutButton = styled(Button)`
  background-image: url(${LogoutIcon});
  width: 2.2rem;
  height: 2.2rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderIcons = () => {
  const [CartOpen, setCartOpen] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    setPageWidth(window.innerWidth);
  }, []);

  const handleCartOpen = () => setCartOpen(prevState => !prevState);
  const handlelogout = () => fire.auth().signOut();
  return (
    <StyledWrapper>
      {pageWidth <= 700 ? (
        <StyledLink to="/checkout">
          <CartButton aria-label="cart" />
        </StyledLink>
      ) : (
        <>
          <CartButton aria-label="cart" onClick={handleCartOpen} />
          <Suspense fallback={<Loader />}>
            <Cart isVisible={CartOpen} />
          </Suspense>
        </>
      )}

      <StyledLogoutButton aria-label="logut" onClick={handlelogout} />
    </StyledWrapper>
  );
};

export default HeaderIcons;
