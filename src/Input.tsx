import styled, { css } from 'styled-components';

type InputProps = {
  $error?: boolean;
};

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  height: 96px;
  width: 64px;
  ${(p) =>
    p.value
      ? css<InputProps>`
          border: 2px solid ${(p) => (p.$error ? '#d54a00' : '#0046c6')};
        `
      : css`
          border: 1px solid rgba(25, 29, 36, 0.2);
        `}
  caret-color: ${(p) => (p.$error ? '#d54a00' : '#0046c6')};
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 10px 10px -5px rgba(25, 29, 36, 0.2);
  color: #191d24;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;

  &:focus {
    outline: 0;
  }
`;
