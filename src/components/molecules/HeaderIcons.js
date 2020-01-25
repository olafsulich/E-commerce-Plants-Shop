import React, { useState, useEffect, lazy, Suspense } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../atoms/Button/Button';
import CartButton from '../atoms/Button/CartButton';
import { fire } from '../../firebase/Firebase';
import Loader from '../atoms/Loader/Loader';

const Cart = lazy(() => import('./Cart'));

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderIcons = ({ isSinglePlant }) => {
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
      {isSinglePlant ? (
        <Button logoutSinglePlant aria-label="logut" onClick={handlelogout}>
          logout
        </Button>
      ) : (
        <Button logoutMain aria-label="logut" onClick={handlelogout}>
          logout
        </Button>
      )}
    </StyledWrapper>
  );
};
HeaderIcons.propTypes = {
  isSinglePlant: PropTypes.bool,
};
HeaderIcons.defaultProps = {
  isSinglePlant: null,
};
export default HeaderIcons;
