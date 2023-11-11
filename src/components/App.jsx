import { MyInput } from './MyInput';
import { useState } from 'react';

const App = () => {
  const [textString, setTextString] = useState('');

  const handleSubmit = text => {
    setTextString(text);
  };

  return (
    <div>
      <MyInput onSubmit={handleSubmit}>Hello</MyInput>
      <div>{textString}</div>
    </div>
  );
};

export { App };
