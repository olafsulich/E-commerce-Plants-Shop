import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import magnifierIcon from '../../../assets/svg/magify.svg';

const SelectWrapper = styled.div`
  width: 100%;
  width: 24rem;
  margin: 2rem 1.5rem;
  @media only screen and (min-width: 500px) {
    width: 28rem;
  }
  @media only screen and (min-width: 700px) {
    width: 24rem;
    margin: 0rem 1.5rem;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 50px;
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 92% 50%;
  background-repeat: no-repeat;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.fontColorText};
  }
`;
const StyledLabel = styled.label`
  display: block;
  font-size: 0.95rem;
  font-weight: ${({ theme }) => theme.regular};
  text-align: start;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const Search = ({ name, value, onChange, placeholder }) => {
  return (
    <SelectWrapper data-testid="search">
      <StyledLabel htmlFor="search">Search</StyledLabel>
      <StyledInput
        data-testid="searchInput"
        aria-label="search input"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="search"
        autoComplete="off"
        id="search"
      />
    </SelectWrapper>
  );
};
Search.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  placeholder: 'search',
  name: 'search',
  onChange: () => {},
  value: 'search',
};

export default Search;
