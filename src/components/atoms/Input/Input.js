import styled, { css } from 'styled-components';
import magnifierIcon from '../../../assets/svg/magify.svg';

const StyledInput = styled.input`
  width: 24rem;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.regular};
  background-color: ${({ theme }) => theme.secondaryColor};
  padding: 10px 20px 10px 20px;
  border: none;
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
  ${({ search }) =>
    search &&
    css`
      margin: 2rem 0;
      border-radius: 50px;
      background-image: url(${magnifierIcon});
      background-size: 15px;
      background-position: 90% 50%;
      background-repeat: no-repeat;
      @media only screen and (min-width: 700px) {
        margin: 0 2rem;
      }
    `};
`;

export default StyledInput;
