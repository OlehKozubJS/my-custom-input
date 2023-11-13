import { /*inputContainer, */ inputContent /*, enterButton*/ } from './css';
import { useState, useEffect } from 'react';

const keyExceptions = [];

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
      if (event.key === 'Backspace') {
        const shorterText = text.slice(0, text.length - 1);
        setText(shorterText);
        return;
      }
      setText(text + event.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [text, setText]);

  return (
    <div onClick={toggleIsActive} className={inputContent}>
      {text || children}
    </div>
  );
};

export { DivInput };
