import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../../context/CartContext';

import RangeInput from '../atoms/RangeInput/RangeInput';
import SelectInput from '../atoms/SelectInput/SelectInput';
import Search from '../atoms/Input/Search';

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

const Preferences = () => {
  const context = useContext(CartContext);
  const {
    type,
    price,
    minPrice,
    maxPrice,
    searchName,
    handleChangeSearch,
    handleChangeType,
    handleChangePrice,
  } = context;
  return (
    <StyledFormWrapper>
      <StyledWrapper>
        <Search
          search
          name="searchName"
          value={searchName}
          placeholder="search plants"
          onChange={handleChangeSearch}
        ></Search>
        <SelectInput name="type" value={type} onChange={handleChangeType} />
        <RangeInput
          name="price"
          onChange={handleChangePrice}
          value={price}
          minPrice={minPrice}
          maxPrice={maxPrice}
          price={price}
        />
      </StyledWrapper>
    </StyledFormWrapper>
  );
};
export default Preferences;
