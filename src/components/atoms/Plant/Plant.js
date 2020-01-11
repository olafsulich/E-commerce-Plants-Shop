import React from 'react';
import styled from 'styled-components';
import Plant from '../../../assets/svg/plant.svg';
import Morphing from '../../../assets/svg/morphing.svg';

const StyledPlantWrapper = styled.figure`
  margin-top: 2rem;
  position: relative;

  width: 25rem;
  height: 27rem;
  @media only screen and (min-width: 700px) {
    width: 30rem;
    height: 34rem;
  }
`;

const StyledMorphing = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const StyledPlant = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-45%, -40%);
`;

const Heroplant = () => (
  <StyledPlantWrapper product>
    <StyledMorphing src={Morphing} />
    <StyledPlant src={Plant} />
  </StyledPlantWrapper>
);
export default Heroplant;
