import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../atoms/Text/Text';
import Button from '../atoms/Button/Button';
import Cart from '../molecules/Cart';
import CartIcon from '../../assets/svg/cart.svg';
import fire from '../../firebase/Firebase';

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

class Header extends React.Component {
  state = {
    isCartOpen: false,
    user: {},
  };

  unsubscribeFromAuth = null;

  handleCartOpen = () => {
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen,
    }));
  };

  componentDidMount = () => {
    this.authListener();
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  };

  handlelogout = () => {
    fire.auth().signOut();
  };

  render() {
    const { isCartOpen, user } = this.state;
    return (
      <StyledHeader>
        <StyledLink to="/">
          <Text logo as="h1">
            Plants & Home
          </Text>
        </StyledLink>
        <StyledWrapper>
          {user ? (
            <Button secondary onClick={this.handlelogout}>
              Sign out
            </Button>
          ) : (
            <StyledLink to="/login">
              <Button secondary>Sign in</Button>
            </StyledLink>
          )}

          <StyledCartButton cart onClick={this.handleCartOpen} />
          <Cart isVisible={isCartOpen} />
        </StyledWrapper>
      </StyledHeader>
    );
  }
}

export default Header;
