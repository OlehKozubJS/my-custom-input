import { inputContainer, inputContent, enterButton } from './css';
import { useState, useEffect } from 'react';

const DivInput = ({ children, onChange }) => {
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

  const toggleIsActive = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.type !== 'keydown') return;
      setText(text + event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    /*
    if (isActive) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    */
  }, []);

  return (
    <div onClick={toggleIsActive} className={inputContent}>
      {text || children}
    </div>
  );
};

export { DivInput };
