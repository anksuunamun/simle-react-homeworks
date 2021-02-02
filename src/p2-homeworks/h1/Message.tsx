import React from 'react';
import styles from './Message.module.css';

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={styles.messageWrapper}>
            <img src={props.avatar} alt="avatar"/>
            <div className={`${styles.message} ${styles.speech}`}>
                <div className={styles.firstCol}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.text}>{props.message}</div>
                </div>
                <div className={styles.time}>{props.time}</div>
            </div>

        </div>
    );

}

export default Message;
