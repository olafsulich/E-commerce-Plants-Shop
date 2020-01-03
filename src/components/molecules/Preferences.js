import React from 'react';
import styled from 'styled-components';
import RangeInput from '../atoms/RangeInput/RangeInput';
import StyledInput from '../atoms/Input/Input';
import SelectInput from '../atoms/SelectInput/SelectInput';

const StyledWrapper = styled.form`
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
  <StyledWrapper>
    <StyledInput search placeholder="search plants"></StyledInput>
    <SelectInput />
    <RangeInput />
  </StyledWrapper>
);
export default Preferences;
