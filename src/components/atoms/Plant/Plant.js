import React from 'react';
import styled from 'styled-components';
import Plant from '../PlantIcon/PlantIcon';
import Morphing from '../../../assets/svg/morphing.svg';

const StyledPlantWrapper = styled.figure`
  margin-top: 6rem;
  position: relative;

  width: 25rem;
  height: 27rem;
  @media only screen and (min-width: 700px) {
    width: 30rem;
    height: 34rem;
    margin-top: 2rem;
  }
`;

const StyledMorphing = styled.img`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const StyledPlant = styled.div`
  width: 90%;
  height: 90%;
  position: absolute;
  top: 30%;
  left: 70%;
  transform: translate(-45%, -40%);
`;
const StyledPlantDefault = styled.div`
  width: 13rem;
  height: 10rem;
  margin-top: 2rem;
  position: absolute;
  top: -3rem;
  left: 0rem;
  @media only screen and (min-width: 700px) {
    width: 18rem;
    height: 12rem;
    top: -4rem;
    left: -1rem;
    margin-top: 0rem;
  }
`;

const StyledPlantIcon = styled(Plant)`
  width: 100%;
  height: 100%;
`;

const Heroplant = () => {
  return (
    <StyledPlantWrapper product data-testid="plant">
      <StyledMorphing src={Morphing} alt="morphing image" />
      <StyledPlant>
        <StyledPlantDefault>
          <StyledPlantIcon />
        </StyledPlantDefault>
      </StyledPlant>
    </StyledPlantWrapper>
  );
};
export default Heroplant;
