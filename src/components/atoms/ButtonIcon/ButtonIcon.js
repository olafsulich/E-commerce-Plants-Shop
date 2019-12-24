import styled, { css } from 'styled-components';
import UserIcon from '../../../assets/images/user.jpg';
import CartIcon from '../../../assets/svg/cart.svg';

const StyledButtonIcon = styled.button`
  display: block;
  width: 35px;
  height: 35px;
  background-image: url(${UserIcon});
  background-repeat: no-repeat;
  background-position: 50% 10%;
  background-size: 100%;
  border: none;
  border-radius: 50px;
  overflow: hidden;
  margin: 0 0.5rem;
  ${({ cart }) =>
    cart &&
    css`
      background-image: url(${CartIcon});
    `}
  @media only screen and (min-width: 700px) {
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
  }
`;
export default StyledButtonIcon;
