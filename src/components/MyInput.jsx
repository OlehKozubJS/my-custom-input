import { inputContainer, inputContent, enterButton } from './css';
import { useState /*, useCallback*/ } from 'react';

const MyInput = ({ children }) => {
  сonst[(textString, setTextString)] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    event.currentTarget.reset();
  };

  return (
    <form className={inputContainer}>
      <input className={inputContent}>{children}</input>
      <button type="submit" onSubmit={handleSubmit} className={enterButton}>
        E
      </button>
    </form>
  );
};

export { MyInput };
