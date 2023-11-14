import { /*inputContainer, */ inputContent /*, enterButton*/ } from './css';
import { useState, useEffect } from 'react';

const keyExceptions = [
  'Tab',
  'CapsLock',
  'Shift',
  'Enter',
  'Control',
  'Alt',
  'ContextMenu',
  'Meta',
  'NumLock',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
];

const DivInput = ({ children, onChange }) => {
  const [text, setText] = useState('');
  const [isUpperCase, setIsUpperCase] = useState(false);
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
      if (event.type !== 'keydown' || keyExceptions.includes(event.key)) return;
      if (event.key === 'Backspace') {
        const shorterText = text.slice(0, text.length - 1);
        setText(shorterText);
        return;
      }
      if (event.key === 'Shift') {
        setIsUpperCase(true);
      }
      const character = isUpperCase ? event.key.toUpperCase() : event.key;
      setText(text + character);
      setIsUpperCase(false);
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
