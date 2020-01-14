import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { CartContext } from '../../context/CartContext';
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

const FlowerPots = () => {
  const { changeColor } = useContext(CartContext);

  return (
    <>
      <StyledText main>Choose flowerpot</StyledText>
      <StyledWrapper>
        <StyledPot onClick={changeColor}>
          <img
            src={greyPot}
            alt="grey pot"
            data-hex1="#485550"
            data-hex2="#4F7262"
            data-hex3="#4B6358"
          />
        </StyledPot>
        <StyledPot onClick={changeColor}>
          <img
            src={redPot}
            alt="red pot"
            data-hex1="#9E3901"
            data-hex2="#CB4F09"
            data-hex3="#BC4502"
          />
        </StyledPot>
        <StyledPot onClick={changeColor}>
          <img
            src={yellowPot}
            alt="yellow pot"
            data-hex1="#8D9901"
            data-hex2="#CCDE00"
            data-hex3="#B5C500"
          />
        </StyledPot>
        <StyledPot onClick={changeColor}>
          <img
            src={bluePot}
            alt="blue pot"
            data-hex1="#006D85"
            data-hex2="#0092B3"
            data-hex3="#00809C"
          />
        </StyledPot>
      </StyledWrapper>
    </>
  );
};

export default FlowerPots;
