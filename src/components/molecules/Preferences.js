import React from 'react';
import styled from 'styled-components';
import RangeInput from '../atoms/RangeInput/RangeInput';
import Search from '../atoms/Search/Search';
import SelectInput from '../atoms/SelectInput/SelectInput';

const StyledWrapper = styled.form`
  padding: 3rem 1rem;
`;

const Preferences = () => (
  <StyledWrapper>
    <Search placeholder="search plants"></Search>
    <SelectInput />
    <RangeInput />
  </StyledWrapper>
);
export default Preferences;
