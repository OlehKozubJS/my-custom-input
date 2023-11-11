import { inputContainer, inputContent, enterButton } from './css';
import { useState /*, useCallback*/ } from 'react';

const MyInput = ({ children }) => {
  сonst[(textString, setTextString)] = useState();

  return (
    <div className={inputContainer}>
      <input className={inputContent}>{children}</input>
      <button className={enterButton}>E</button>
    </div>
  );
};

export { MyInput };
