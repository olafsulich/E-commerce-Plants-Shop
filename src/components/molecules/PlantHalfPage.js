import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../atoms/Text/Text';
import Heroplant from '../atoms/Plant/Plant';

const StyledPlantWrapper = styled.div`
  background: hsl(153, 91%, 48%, 40%);
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 4rem 4rem 12rem 4rem;
`;

const StyledLogoWrapper = styled.section`
  margin: 0 0 10rem 1rem;
  width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const PlantHalfPage = () => (
  <StyledPlantWrapper>
    <StyledLogoWrapper>
      <StyledLink to="/">
        <Text logo as="h1">
          Plants & Home
        </Text>
      </StyledLink>
    </StyledLogoWrapper>
    <Heroplant />
  </StyledPlantWrapper>
);

export default PlantHalfPage;
