import styled, { css } from 'styled-components';
import CartIcon from '../../../assets/svg/cart.svg';

const StyledButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.fontColorText};
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.light};
  font-size: 1.5rem;
  font-family: inherit;
  ${({ active }) =>
    active &&
    css`
      position: relative;
      color: ${({ theme }) => theme.fontColorHeading};
      font-size: 1.2rem;
      font-weight: ${({ theme }) => theme.regular};
      margin-left: 0.6rem;
      ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        background-color: ${({ theme }) => theme.primaryColor};
        z-index: -1;
        top: 60%;
        left: 15%;
      }
    `};
  ${({ secondary }) =>
    secondary &&
    css`
      color: #fff;
      font-weight: ${({ theme }) => theme.regular};
      font-size: 1.3rem;
      background-color: ${({ theme }) => theme.fontColorPrimary};
      width: 8rem;
      height: 3rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  ${({ google }) =>
    google &&
    css`
      background-color: #fff;
      color: inherit;
      font-size: 1.2rem;
      position: relative;
      box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;

      ::before {
        content: url(https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg);
        position: absolute;
        width: 1.2rem;
        heigh: 1.2rem;
        top: 50%;
        transform: translate(50%, -40%);
        left: 0;
      }
    `};

  ${({ cart }) =>
    cart &&
    css`
      background-image: url(${CartIcon});
      ${'' /* width: 32px;
      height: 32px; */}
      width: 2.6rem;
      height: 2.6rem;
      margin: 0 0.8rem;

      ${'' /* @media only screen and (min-width: 700px) {
        width: 38px;
        height: 38px;
        margin: 0 0.8rem;
      }
      @media only screen and (min-width: 900px) {
        width: 40px;
        height: 40px;
        margin: 0 1rem;
      }
      @media only screen and (min-width: 1100px) {
        width: 42px;
        height: 42px;
      } */}
    `}
`;
export default StyledButton;
