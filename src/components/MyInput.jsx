const { Component } = require('react');
const { css, enterButton, inputContainer, inputContent } = require('./css');

class MyInput extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={inputContainer}>
        <div className={inputContent}>{children}</div>
        <button className={css.enterButton}>E</button>
      </div>
    );
  }
}

export { MyInput };
