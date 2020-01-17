import styled, { css } from 'styled-components';

const StyledHeading = styled.h2`
  ${({ main }) =>
    main &&
    css`
      color: ${({ theme }) => theme.fontColorHeading};
      font-size: 2.5rem;
      font-weight: ${({ theme }) => theme.bold};
      padding: 0.4rem 0;
      position: relative;
      display: inline-block;
      @media only screen and (min-width: 500px) {
        font-size: 3rem;
      }
      @media only screen and (min-width: 850px) {
        font-size: 3.6rem;
      }
      @media only screen and (min-width: 1200px) {
        font-size: 4rem;
      }
      @media only screen and (min-width: 1400px) {
        font-size: 4.4rem;
      }

      ::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 50%;
        background-color: ${({ theme }) => theme.primaryColor};
        z-index: -1;
        top: 50%;
        left: 10%;
      }
    `};
`;
export default StyledHeading;
