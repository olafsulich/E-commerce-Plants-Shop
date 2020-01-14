import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';
import Heroplant from '../atoms/Plant/Plant';
import StyledHeading from '../atoms/Heading/Heading';

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 3rem;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
  }
  @media only screen and (min-width: 1000px) {
    padding: 0 5rem;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 7rem;
  }
  @media only screen and (min-width: 1400px) {
    padding: 0 12rem;
  }
`;
const StyledWrapperHeading = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-top: 4rem;
  @media only screen and (min-width: 700px) {
    margin-bottom: 13%;
  }
  @media only screen and (min-width: 700px) {
    align-items: flex-start;
  }
`;

const Hero = () => {
  const { clearColor } = useContext(CartContext);

  useEffect(() => {
    clearColor();
  });

  return (
    <StyledWrapper>
      <StyledWrapperHeading>
        <StyledHeading main>Say hello to </StyledHeading>
        <StyledHeading main>home plants!</StyledHeading>
      </StyledWrapperHeading>
      <Heroplant />
    </StyledWrapper>
  );
};
export default Hero;
