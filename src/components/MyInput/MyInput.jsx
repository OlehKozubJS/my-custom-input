import { Component } from "react";
import css from './MyInput.module.css';

export class MyInput extends Component {
    render() {
        return (
            <div className={css.inputContainer}>
                <div className={css.inputContent}></div>
                <button className={css.enterButton}>E</button>
            </div>
        )
    }
} 