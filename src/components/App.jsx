import { MyInput } from './MyInput';
import { useState } from 'react';
import { DivInput } from './DivInput';

const App = () => {
  const [text, setText] = useState('');

  const handleSubmit = text => {
    setText(text);
  };

  return (
    <div>
      <MyInput onSubmit={handleSubmit}>Hello</MyInput>
      <div>{text}</div>
      <DivInput>Enter something</DivInput>
    </div>
  );
};

export { App };
