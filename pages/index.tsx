import { useState } from 'react';
import styled from 'styled-components';

import { CodeInput } from '../src/CodeInput';

const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 32px;
  margin-top: 120px;
`;

const DigitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  font-size: 24px;
  padding: 16px;
  border: 2px solid rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  background: #ffffff;

  div {
    display: flex;
    justify-content: center;
    min-width: 180px;
  }
`;

const Button = styled.button`
  font-size: 32px;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  min-width: 48px;
  max-width: 48px;
  min-height: 48px;
  max-height: 48px;
  cursor: pointer;
  border-radius: 50%;

  &:active {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const CodeWrapper = styled.div`
  font-size: 24px;

  span {
    font-weight: bold;
    background-color: gold;
    border-radius: 2px;
    padding: 0 4px;
  }
`;

export default function Playground(): JSX.Element {
  const [code, setCode] = useState('');
  const [totalDigits, setTotalDigits] = useState(6);
  const onCodeFull = (newCode: string) => setCode(newCode);
  
  return (
    <MainWrapper>
      <CodeInput totalDigits={totalDigits} onCodeFull={onCodeFull} />
      <DigitWrapper>
        <Button onClick={() => setTotalDigits(d => Math.max(0, d - 1))}>-</Button>
        <div>totalDigits: {totalDigits}</div>
        <Button onClick={() => setTotalDigits(d => d + 1)}>+</Button>
      </DigitWrapper>
      {code ? (
        <CodeWrapper>Last code sent is: <span>{code}</span></CodeWrapper>
      ) : (
        <CodeWrapper>
          No code has been sent yet!
        </CodeWrapper>
      )}
    </MainWrapper>
  );
}
