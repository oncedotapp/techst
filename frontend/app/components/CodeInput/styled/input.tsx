import styled, { css } from 'styled-components';

export type Props = {
  error?: boolean;
  value?: string;
};

export default styled.input<Props>`
  box-sizing: border-box;
  height: 102px;
  width: 62px;
  ${props =>
    props.value
      ? css<Props>`
          border: 2px solid ${p => (p.error ? '#d54a00' : '#0046c6')};
        `
      : css`
          border: 1px solid rgba(25, 29, 36, 0.2);
        `}
  caret-color: ${props => (props.error ? '#d54a00' : '#0046c6')};
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 10px 10px -5px rgba(25, 29, 36, 0.2);
  margin: 0 9px;
  color: #191d24;
  font-family: 'SF UI Display';
  font-size: 36px;
  font-weight: 500;
  line-height: 43px;
  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: 0;
  }
`;
