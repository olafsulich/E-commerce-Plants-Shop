import React from 'react';
import styled from 'styled-components';
import Arrow from '../../../assets/svg/arrow.svg';

const SelectWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.regular};
  text-align: start;
  padding: 0.8rem 0;
`;

const Select = styled.select`
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
  text-indent: 70px;
  text-overflow: '';
  background-image: url(${Arrow});
  background-position: 95% 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  color: ${({ theme }) => theme.fontColorText};
  font-weight: ${({ theme }) => theme.regular};
  font-size: 1.3rem;
`;

const Option = styled.option`
  width: 100%;
  font-size: 1.1rem;
  text-transform: capitalize;

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background: ${({ theme }) => theme.fontColorPrimary};
    color: #fff;
  }
`;

const SelectInput = () => (
  <SelectWrapper>
    <Label htmlFor="select">Provenance</Label>
    <Select id="select">
      <Option>provenance</Option>
      <Option>option 3</Option>
    </Select>
  </SelectWrapper>
);
export default SelectInput;
