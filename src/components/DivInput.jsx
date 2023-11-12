import { inputContainer, inputContent, enterButton } from './css';
import { useState, useEffect } from 'react';

const DivInput = ({ children, onChange }) => {
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

  return <div>{text || children}</div>;
};
