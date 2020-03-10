import React from 'react';

import Form from './styled/form';
import Input from './styled/input';
import InputWrapper from './styled/inputWrapper';

export type Props = {
  error?: boolean;
  total: number;
  onCodeFull: (code: string) => void;
};

const CodeInput: React.FC<Props> = ({ total }) => (
  <Form>
    <InputWrapper>
      {[...Array(Math.ceil(total / 2))].map((_, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <Input key={`input_part1#${idx}`} />
      ))}
    </InputWrapper>
    {total > 1 && (
      <InputWrapper>
        {[...Array(Math.floor(total / 2))].map((_, idx: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <Input key={`input_part2#${idx}`} />
        ))}
      </InputWrapper>
    )}
  </Form>
);

export default CodeInput;
