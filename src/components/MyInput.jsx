const { Component } = require('react');
import {} from "./css";

class MyInput extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={}>
        <div className={}>{children}</div>
        <button className={}>E</button>
      </div>
    );
  }
}

export { MyInput };
