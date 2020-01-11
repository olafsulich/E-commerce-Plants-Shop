import React from 'react';
import styled, { css } from 'styled-components';
import Text from '../atoms/Text/Text';
import greyPot from '../../assets/svg/greyPot.svg';
import bluePot from '../../assets/svg/bluePot.svg';
import yellowPot from '../../assets/svg/yellowPot.svg';
import redPot from '../../assets/svg/redPot.svg';

const StyledWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  @media only screen and (min-width: 400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledPot = styled.figure`
  cursor: pointer;
  width: 7rem;
  height: 7rem;
  padding: 0.8rem;
  border: dashed 4px #f3f6f8;
  ${({ active }) =>
    active &&
    css`
      border: solid 4px #f3f6f8;
    `}
  img {
    width: 100%;
    height: 100%;
  }
`;

const StyledText = styled(Text)`
  font-size: 2.4rem;
`;

const FlowerPots = () => (
  <>
    <StyledText main>Choose flowerpot</StyledText>
    <StyledWrapper>
      <StyledPot active>
        <img src={greyPot} alt="grey pot" />
      </StyledPot>
      <StyledPot>
        <img src={redPot} alt="red pot" />
      </StyledPot>
      <StyledPot>
        <img src={yellowPot} alt="yellow pot" />
      </StyledPot>
      <StyledPot>
        <img src={bluePot} alt="blue pot" />
      </StyledPot>
    </StyledWrapper>
  </>
);

export default FlowerPots;
