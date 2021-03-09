import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import styles from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date);
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        // stop
        clearTimeout(timerId);
    }
    const start = () => {
        stop();
        //Вызов setTimeout возвращает «идентификатор таймера» timerId, который можно использовать для отмены дальнейшего выполнения.
        const id: number = window.setInterval(() => {
            // setDate
            setDate(new Date);
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        // show
        setShow(true);
    };
    const onMouseLeave = () => {
        // close
        setShow(false);
    };

    const addZero = (time: number) => {
        return time < 10 ? `0${time}` : time;
    }
    const hours = date && addZero(date.getHours());
    const minutes = date && addZero(date.getMinutes());
    const seconds = date && addZero(date.getSeconds());

    const stringTime = `${hours}:${minutes}:${seconds}`; // fix with date

    const stringDate = `${Intl.DateTimeFormat('en-US', {month: 'long'}).format(date)} ${date.getDate()}, ${Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date)}`; // fix with date

    return (
        <div>
            <div className={styles.clockWrapper}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                > {stringTime}
                </div>
                {show && (
                    <div className={styles.dateWrapper}>
                        {stringDate}
                    </div>
                )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    );
}

export default Clock;
