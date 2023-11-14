const keyDownEffect = (onKeyDown, dependencies) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.type !== 'keydown' || keyExceptions.includes(event.key)) return;
      onKeyDown();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, dependencies);
};

export { keyDownEffect };
