import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../../context/CartContext';
import Plant from '../PlantIcon/PlantIcon';
import PlantDefault from '../../../assets/svg/plant.svg';
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
  width: 90%;
  height: 90%;
  position: absolute;
  top: 35%;
  left: 40%;
  transform: translate(-45%, -40%);
`;

const Heroplant = () => {
  return (
    <StyledPlantWrapper product>
      <StyledMorphing src={Morphing} />
      <StyledPlant>
        <StyledPlantDefault>
          <Plant />
        </StyledPlantDefault>
      </StyledPlant>
    </StyledPlantWrapper>
  );
};
export default Heroplant;
