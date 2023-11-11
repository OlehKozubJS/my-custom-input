import { inputContainer, inputContent, enterButton } from './css';
import { useState /*, useCallback*/ } from 'react';

const MyInput = ({ children, onSubmit }) => {
  const [textString, setTextString] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    setTextString(event.currentTarget.elements.inputContent.value);
    onSubmit(textString);
    event.currentTarget.reset();
  };

  return (
    <form className={inputContainer}>
      <input className={inputContent} name="inputContent">
        {children}
      </input>
      <button type="submit" onSubmit={handleSubmit} className={enterButton}>
        E
      </button>
    </form>
  );
};

export { MyInput };
