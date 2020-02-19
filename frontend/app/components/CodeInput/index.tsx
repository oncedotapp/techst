import React from 'react';

import Form from './styled/form';
import Input from './styled/input';

/**
 * Welcome to the Techst...
 * Your mission, should you choose to accept it, will to code the CodeInput component.
 * The CodeInput component is used by the end users to enter their multi-digit login code (received by email)
 */

export type Props = {
  error?: boolean;
  total: number;
  onCodeFull: (code: string) => void;
};

const CodeInput: React.FC<Props> = ({ error, total }) => (
  <Form>
    {[...Array(total)].map((_, idx: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <Input key={`input#${idx}`} error={error} total={total} idx={idx} />
    ))}
  </Form>
);

export default CodeInput;
