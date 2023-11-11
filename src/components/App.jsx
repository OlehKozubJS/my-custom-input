import { MyInput } from './MyInput';
import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');

  const handleSubmit = text => {
    setText(text);
  };

  return (
    <div>
      <MyInput onSubmit={handleSubmit}>Hello</MyInput>
      <div>{text}</div>
    </div>
  );
};

export { App };
