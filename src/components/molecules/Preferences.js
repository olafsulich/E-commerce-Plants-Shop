import React from 'react';
import styled from 'styled-components';
import RangeInput from '../atoms/RangeInput/RangeInput';
import StyledInput from '../atoms/Input/Input';
import SelectInput from '../atoms/SelectInput/SelectInput';

const StyledFormWrapper = styled.div`
  margin-top: 3rem;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledWrapper = styled.form`
  margin-top: 3rem;
  width: 100%;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 700px) {
    flex-direction: row;
    width: 110%;
    margin: 3rem 0 0rem 0;
  }
  @media only screen and (min-width: 1300px) {
    margin: 3rem 0 1rem 0;
  }
`;

const Preferences = () => (
  <StyledFormWrapper>
    <StyledWrapper>
      <StyledInput search placeholder="search plants"></StyledInput>
      <SelectInput />
      <RangeInput />
    </StyledWrapper>
  </StyledFormWrapper>
);
export default Preferences;
