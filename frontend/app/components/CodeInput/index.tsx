import React from 'react';

import Form from './styled/form';
import Input from './styled/input';

/**
 * Welcome to the Techst...
 * Your mission, should you choose to accept it, will be to code the CodeInput component.
 *
 * The CodeInput component is used by the users to enter their multi-digit login code (received by email)
 * Here are some specs about this component: (not in any difficulty order or anything)
 * - Whichever box you click on, your cursor should always be active on the left most box
 * - You can only write up to 1 **digit** per box
 * - Writing a digit in a box should bring your cursor to the next box
 * - Once the code is fully written, the `onCodeFull` callback should be called (with the code as parameter obviously)
 */

export type Props = {
  error?: boolean;
  total: number;
  onCodeFull: (code: string) => void;
};

const CodeInput: React.FC<Props> = ({ total }) => (
  <Form>
    {[...Array(total)].map((_, idx: number) => (
      // eslint-disable-next-line react/no-array-index-key
      <Input key={`input#${idx}`} total={total} idx={idx} />
    ))}
  </Form>
);

export default CodeInput;
