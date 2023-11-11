const { Component } = require('react');
import { inputContainer, inputContent, enterButton } from './css';

class MyInput extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={inputContainer}>
        <div className={inputContent}>{children}</div>
        <button className={enterButton}>E</button>
      </div>
    );
  }
}

export { MyInput };
