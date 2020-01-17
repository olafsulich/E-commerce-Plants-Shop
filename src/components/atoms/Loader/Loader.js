import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
from {
   transform: rotate(0deg); 
}
to { 
    transform: rotate(360deg); 
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoaderCircle = styled.div`
  display: inline-block;
  box-sizing: border-box;
  padding: 30px;
  width: 8rem;
  height: 140px;
`;

const StyledCircle = styled.div`
  box-sizing: border-box;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  border: 10px solid hsla(204, 26%, 96%, 1);
  border-top-color: hsla(152, 94%, 33%, 1);
  animation: ${spin} 1s infinite linear;
`;

const Loader = () => (
  <StyledWrapper>
    <StyledLoaderCircle>
      <StyledCircle />
    </StyledLoaderCircle>
  </StyledWrapper>
);
export default Loader;
