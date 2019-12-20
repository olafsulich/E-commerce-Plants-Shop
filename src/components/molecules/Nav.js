import React from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button/Button';

const StyledWrapper = styled.nav`
  margin-top: 3rem;
  padding: 0 3rem;
`;

const StyledListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
const StyledLinkWrapper = styled.li`
  padding: 0 1rem;
`;

const Navigation = () => (
  <StyledWrapper>
    <StyledListWrapper>
      <StyledLinkWrapper>
        <Button active href="">
          All
        </Button>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Button href="">Home</Button>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Button href="">Outdoor</Button>
      </StyledLinkWrapper>
    </StyledListWrapper>
  </StyledWrapper>
);
export default Navigation;
