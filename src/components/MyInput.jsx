import { inputContainer, inputContent, enterButton } from './css';

const MyInput = ({ children }) => {
  return (
    <div className={inputContainer}>
      <div className={inputContent}>{children}</div>
      <button className={enterButton}>E</button>
    </div>
  );
};

export { MyInput };
