import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/Text/Text';
import StyledButtonIcon from '../atoms/ButtonIcon/ButtonIcon';

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
`;

const Header = () => (
  <StyledHeader>
    <Text logo as="h1">
      Plants & Home
    </Text>
    <StyledWrapper>
      <StyledButtonIcon cart />
      <StyledButtonIcon />
    </StyledWrapper>
  </StyledHeader>
);
export default Header;
