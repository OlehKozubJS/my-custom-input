const keyDownEffect = onKeyDown => {
  const handleKeyDown = event => {
    if (event.type !== 'keydown') return;
    onKeyDown();
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
};

export { keyDownEffect };
