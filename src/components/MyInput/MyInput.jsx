const {Component} = require("react");
const {} = require("./MyInput.module.css");

export class MyInput extends Component {
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
