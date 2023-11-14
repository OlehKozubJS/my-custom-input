const keyDownEffect = onKeyDown => {
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
  }, [text, setText, isUpperCase]);

  return (
    <div onClick={toggleIsActive} className={inputContent}>
      {text || children}
    </div>
  );
};

export { keyDownEffect };
