import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CartContext } from '../../../context/CartContext';

import Arrow from '../../../assets/svg/arrow.svg';

const SelectWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  width: 24rem;
  @media only screen and (min-width: 500px) {
    width: 28rem;
  }
  @media only screen and (min-width: 700px) {
    margin: 0 2rem;
    width: 24rem;
  }
`;

const StyledSelect = styled.select`
  background: ${({ theme }) => theme.secondaryColor};
  border: none;
  width: 100%;
  padding: 10px 20px 10px 20px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 0%;
  text-overflow: '';
  background-image: url(${Arrow});
  background-position: 95% 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  color: ${({ theme }) => theme.fontColorText};
  font-weight: ${({ theme }) => theme.regular};
  font-size: 1.3rem;
  &:focus {
    outline-color: ${({ theme }) => theme.fontColorPrimary};
  }
`;

const StyledOption = styled.option`
  width: 100%;
  font-size: 1.1rem;
  text-transform: capitalize;

  &:hover,
  &:active,
  &:focus,
  &:checked {
    background: ${({ theme }) => theme.fontColorPrimary};
    color: #fff;
  }
`;
const StyledLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.regular};
  text-align: start;
  margin-bottom: 0.5rem;
`;

const SelectInput = props => {
  const context = useContext(CartContext);
  const { plants } = context;
  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };
  let types = getUnique(plants, 'plantType');
  types = ['all', ...types];
  const { name, onChange, value } = props;

  types = types.map(item => {
    return (
      <StyledOption value={item} key={item}>
        {item}
      </StyledOption>
    );
  });
  return (
    <SelectWrapper>
      <StyledLabel>Select type</StyledLabel>
      <StyledSelect aria-label="input select" name={name} onChange={onChange} value={value}>
        {types}
      </StyledSelect>
    </SelectWrapper>
  );
};
SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
export default SelectInput;
