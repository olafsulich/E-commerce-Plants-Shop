import styled, { css } from 'styled-components';

const StyledHeading = styled.h1`
  ${({ logo }) =>
    logo &&
    css`
      color: ${({ theme }) => theme.fontColorHeader};
      font-size: 1.5rem;
      text-transform: uppercase;
    `};
  ${({ main }) =>
    main &&
    css`
      color: ${({ theme }) => theme.fontColorHeading};
      font-size: 2.5rem;
      font-weight: ${({ theme }) => theme.bold};
      padding: 0.4rem 0;
      position: relative;
      display: inline-block;
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
