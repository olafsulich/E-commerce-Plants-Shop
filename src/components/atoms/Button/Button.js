import styled, { css } from 'styled-components';
import removeIcon from '../../../assets/svg/removeIcon.svg';
import backIcon from '../../../assets/svg/backArrow.svg';

const StyledButton = styled.button`
  display: block;
  color: ${({ theme }) => theme.fontColorHeading};
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
      color: ${({ theme }) => theme.fontColorHeading};
      font-weight: ${({ theme }) => theme.regular};
      font-size: 1.3rem;
      background-color: ${({ theme }) => theme.buttonColor};
      width: 8rem;
      height: 3rem;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
  ${({ quantity }) =>
    quantity &&
    css`
      font-size: 1.3rem;
      cursor: pointer;
      color: ${({ theme }) => theme.fontColorPrimary};
    `};

  ${({ remove }) =>
    remove &&
    css`
      align-self: center;
      justify-self: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
      background-image: url(${removeIcon});
    `};

  ${({ back }) =>
    back &&
    css`
      align-self: center;
      justify-self: center;
      width: 40px;
      height: 20px;
      cursor: pointer;
      background-image: url(${backIcon});
      @media only screen and (max-width: 500px) {
        display: none;
      }
    `};
  ${({ logoutMain }) =>
    logoutMain &&
    css`
      color: ${({ theme }) => theme.fontColorPrimary};
      background-color: ${({ theme }) => theme.secondaryColor};
      padding: 0.6rem 1.8rem;
      font-size: 1.3rem;
    `};

  ${({ logoutSinglePlant }) =>
    logoutSinglePlant &&
    css`
      color: ${({ theme }) => theme.fontColorHeading};
      background-color: ${({ theme }) => theme.primaryColor};
      padding: 0.6rem 1.8rem;
      font-size: 1.3rem;
    `};
`;
export default StyledButton;
