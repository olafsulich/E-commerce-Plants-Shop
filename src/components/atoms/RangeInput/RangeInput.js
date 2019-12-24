import React from 'react';

import styled from 'styled-components';

const InputWrapper = styled.div`
  margin: 2rem 0;
  width: 24rem;
  @media only screen and (min-width: 500px) {
    width: 28rem;
  }
  @media only screen and (min-width: 700px) {
    margin: 0 2rem;
    width: 24rem;
  }
  input[type='range'] {
    -webkit-appearance: none;
    background: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor};
    border: none;
    border-radius: 3px;
  }
  input[type='range']::-ms-track {
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor};
    border: none;
    border-radius: 3px;
  }
  input[type='range']::-moz-range-track {
    height: 5px;
    background: ${({ theme }) => theme.secondaryColor};
    border: none;
    border-radius: 3px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColorPrimary};
    margin-top: -5px;
    position: relative;
  }
  input[type='range']::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColorPrimary};
    margin-top: -5px;
    position: relative;
  }
  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColorPrimary};
    margin-top: -5px;
    position: relative;
  }
  input[type='range']:focus {
    outline-color: ${({ theme }) => theme.fontColorPrimary};
    &::-webkit-slider-thumb:after {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${({ theme }) => theme.fontColorPrimary};
      padding: 5px 10px;
      border: 2px solid ${({ theme }) => theme.fontColorPrimary};
    }
    &::-ms-thumb:after {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: ${({ theme }) => theme.fontColorPrimary};
      padding: 5px 10px;
      border: 2px solid ${({ theme }) => theme.fontColorPrimary};
    }
    &::-moz-range-thumb:after {
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background: #eee;
      border-radius: 5px;
      color: #000;
      padding: 5px 10px;
      border: 2px solid #000;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  margin-top: 1em;
`;

const Label = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.regular};
  text-align: start;
`;

const RangeInput = () => (
  <InputWrapper>
    <Label htmlFor="range">Price range</Label>
    <Input type="range" min={4.99} max={29.99} id="range" />
  </InputWrapper>
);
export default RangeInput;
