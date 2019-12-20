import React from 'react';
import styled from 'styled-components';
import PlantIcon from '../assets/svg/plantTree.svg';
import StyledHeading from '../components/atoms/Heading/Heading';
import Text from '../components/atoms/Text/Text';

const StyledWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 3rem;
`;
const StyledWrapperHeading = styled.article`
  display: block;
  text-align: center;
  padding: 0 1rem;
`;
const StyledWrapperImage = styled.figure`
  width: 25rem;
  height: 27rem;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

const WelcomeStyle = () => (
  <StyledWrapper>
    <StyledWrapperHeading>
      <StyledHeading main>Say hello to </StyledHeading>
      <StyledHeading main>home plants!</StyledHeading>
      <Text main>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
    </StyledWrapperHeading>
    <StyledWrapperImage>
      <img src={PlantIcon} alt="Plant" />
    </StyledWrapperImage>
  </StyledWrapper>
);
export default WelcomeStyle;
