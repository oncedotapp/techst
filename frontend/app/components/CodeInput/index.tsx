import React from 'react';

export type Props = {
  error?: boolean;
  total: number;
  onCodeFull: (code: string) => void;
};

const CodeInput: React.FC<Props> = () => <div>TODO :)</div>;

export default CodeInput;
