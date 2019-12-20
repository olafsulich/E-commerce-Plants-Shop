import styled, { css } from 'styled-components';

const Text = styled.p`
  ${({ main }) =>
    main &&
    css`
      color: ${({ theme }) => theme.fontColorText};
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-weight: ${({ theme }) => theme.light};
      padding: 1rem 0;
      text-align: center;
    `}
  ${({ logo }) =>
    logo &&
    css`
      color: ${({ theme }) => theme.fontColorHeader};
      font-size: 1.5rem;
      text-transform: uppercase;
    `};
`;
export default Text;
