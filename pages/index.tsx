import { CodeInput } from '../src/CodeInput';

export default function Playground(): JSX.Element {
  return (
    <div>
      <CodeInput totalDigits={6} onCodeFull={console.log} />
    </div>
  );
}
