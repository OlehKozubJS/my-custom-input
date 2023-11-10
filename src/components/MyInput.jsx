const { Component } = require('react');
const { enterButton, inputContainer, inputContent } = require('./css');

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

module.exports = { MyInput };
