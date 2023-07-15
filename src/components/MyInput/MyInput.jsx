import { Component } from "react";
import css from './MyInput.module.css';

export class MyInput extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className={css.inputContainer}>
                <div className={css.inputContent}>{children}</div>
                <button className={css.enterButton}>E</button>
            </div>
        )
    }
} 