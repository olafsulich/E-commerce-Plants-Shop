import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import magnifierIcon from '../../../assets/svg/magify.svg';

const StyledInput = styled.input`
  width: 24rem;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 10px 20px 10px 20px;
  margin: 2rem 0;
  border: none;
  border-radius: 50px;
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 90% 50%;
  background-repeat: no-repeat;
  @media only screen and (min-width: 500px) {
    width: 28rem;
  }
  @media only screen and (min-width: 700px) {
    width: 24rem;
  }
  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.fontColorText};
  }

  @media only screen and (min-width: 700px) {
    margin: 0 2rem;
  }
`;

const Search = props => {
  const { name, value, onChange, placeholder } = props;
  return <StyledInput name={name} value={value} onChange={onChange} placeholder={placeholder} />;
};
Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Search;
