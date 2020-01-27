import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Text from '../atoms/Text/Text';
import HeaderIcons from '../molecules/HeaderIcons';

const StyledHeader = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem;
  margin: 0 auto;

  @media only screen and (min-width: 1300px) {
    padding: 4rem 4rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
const Header = () => (
  <StyledHeader>
    <Text logo as="h1">
      <StyledLink to="/">Plants & Home </StyledLink>
    </Text>
    <HeaderIcons />
  </StyledHeader>
);

export default Header;
