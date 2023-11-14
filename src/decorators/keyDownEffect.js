import { useEffect } from 'react';

const keyDownEffect = (onKeyDown, dependencies) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.type !== 'keydown') return;
      onKeyDown();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, dependencies);
};

export { keyDownEffect };
