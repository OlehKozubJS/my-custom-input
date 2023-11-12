import { inputContainer, inputContent, enterButton } from './css';
import { useState } from 'react';

const MyInput = ({ children, onSubmit }) => {
  const [textString, setTextString] = useState('');

  const handleChange = event => {
    setTextString(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setTextString('');
    onSubmit(textString);
    form.reset();
  };

  return (
    <form className={inputContainer} onSubmit={handleSubmit}>
      <input
        className={inputContent}
        name="inputContent"
        value={textString}
        onChange={handleChange}
        placeholder={children}
      />

      <button type="submit" className={enterButton}>
        E
      </button>
    </form>
  );
};

export { MyInput };
