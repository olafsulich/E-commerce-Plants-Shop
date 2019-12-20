import styled from 'styled-components';
import magnifierIcon from '../../../assets/svg/magify.svg';

const Search = styled.input`
  margin: 2rem 0;
  width: 100%;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.secondaryColor};
  border: none;
  border-radius: 50px;
  padding: 10px 20px 10px 20px;
  background-image: url(${magnifierIcon});
  background-size: 15px;
  background-position: 90% 50%;
  background-repeat: no-repeat;

  ::placeholder {
    letter-spacing: 1px;
    color: ${({ theme }) => theme.fontColorText};
  }
`;

export default Search;
