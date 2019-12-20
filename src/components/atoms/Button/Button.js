import styled, { css } from 'styled-components';

const StyledButton = styled.a`
  display: block;
  color: inherit;
  border: none;
  text-decoration: none;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.fontColorPrimary};
      font-weight: ${({ theme }) => theme.bold};
      border-bottom: 2px solid ${({ theme }) => theme.fontColorPrimary};
    `};
`;
export default StyledButton;
