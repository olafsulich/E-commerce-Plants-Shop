import styled, { css } from 'styled-components';

const Text = styled.p`
  ${({ main }) =>
    main &&
    css`
      color: ${({ theme }) => theme.fontColorText};
      font-size: 1.5rem;
      line-height: 2.25rem;
      font-weight: ${({ theme }) => theme.light};
      padding: 1rem 0;
      text-align: left;
    `}
  ${({ logo }) =>
    logo &&
    css`
      color: ${({ theme }) => theme.fontColorHeading};
      font-size: 1.5rem;
      text-transform: uppercase;
      cursor: pointer;
    `};
`;
export default Text;
