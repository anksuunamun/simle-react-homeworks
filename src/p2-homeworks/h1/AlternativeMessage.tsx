import React from "react";
import {MessagePropsType} from './Message';
import styles from './AlternativeMessage.module.css';

function AlternativeMessage(props: MessagePropsType) {
    return (
        <div className={styles.messageWrapper}>
            <div className={`${styles.message} ${styles.speech}`}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>
            <div><img src={props.avatar} alt="avatar"/></div>
        </div>
    );
}

export default AlternativeMessage;
