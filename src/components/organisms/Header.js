import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../atoms/Text/Text';
import Button from '../atoms/Button/Button';
import Cart from '../molecules/Cart';
import CartIcon from '../../assets/svg/cart.svg';
import LogoutIcon from '../../assets/svg/logout.svg';
import { fire } from '../../firebase/Firebase';

const StyledCartButton = styled(Button)`
  background-image: url(${CartIcon});
  z-index: 11;
  cursor: pointer;
`;
const StyledHeader = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  margin: 0 auto;

  @media only screen and (min-width: 400px) {
    padding: 3rem 3rem;
  }
  @media only screen and (min-width: 1300px) {
    padding: 4rem 4rem;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLogoutButton = styled(Button)`
  background-image: url(${LogoutIcon});
  width: 2.2rem;
  height: 2.2rem;
`;

class Header extends React.Component {
  state = {
    isCartOpen: false,
  };

  handleCartOpen = () => {
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  handlelogout = () => {
    fire.auth().signOut();
  };

  render() {
    const { isCartOpen } = this.state;
    return (
      <StyledHeader>
        <StyledLink to="/">
          <Text logo as="h1">
            Plants & Home
          </Text>
        </StyledLink>
        <StyledWrapper>
          <StyledCartButton cart onClick={this.handleCartOpen} />
          <Cart isVisible={isCartOpen} />
          <StyledLogoutButton onClick={this.handlelogout} />
        </StyledWrapper>
      </StyledHeader>
    );
  }
}

export default Header;
