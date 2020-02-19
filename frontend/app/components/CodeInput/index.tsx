import React from 'react';

import Form from './styled/form';
import Input from './styled/input';

export type Props = {
  error?: boolean;
  total: number;
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
