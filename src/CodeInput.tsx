import { Form } from './Form';
import { Input } from './Input';

type CodeInputProps = {
  totalDigits: number;
  onCodeFull: (code: string) => void;
};

export function CodeInput({ totalDigits, onCodeFull }: CodeInputProps): JSX.Element {
  return (
    <>Code your component here!</>
  );
}