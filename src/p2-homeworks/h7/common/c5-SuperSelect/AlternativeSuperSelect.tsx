import React, {useState, useEffect, KeyboardEvent} from 'react';
import styles from './AlternativeSuperSelect.module.css';
import {v1} from 'uuid';

type AlternativeSuperSelectPropsType = {
    options?: any[]
    onChangeOption?: (option: any) => void
    value: string
}

const AlternativeSuperSelect: React.FC<AlternativeSuperSelectPropsType> = (
    {
        options,
        onChangeOption,
        value
    }
) => {

    useEffect(() => {
        setLocalValue(value)
    }, [value])

    const [active, toggleActive] = useState<boolean>(false)
    const [localValue, setLocalValue] = useState<string>(value)

    const onSelectClick = () => {
        toggleActive(!active)
    }
    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (options && onChangeOption) {
            for (let i = 0; i < options.length; i++) {
                let nextElementIndex = i;
                if (e.key === 'ArrowDown') nextElementIndex = (i + 1)
                if (e.key === 'ArrowUp') nextElementIndex = i - 1
                if (e.key === 'Enter' || e.key === 'Escape') nextElementIndex = i
                if ((options[i] === localValue) && options[nextElementIndex]) {
                    onChangeOption(options[nextElementIndex])
                    break;
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            toggleActive(false)
        }
    }
    const onBlurHandler = () => {
        toggleActive(false)
    }

    const mappedOptions: any[] = options
        ? options.map(option => {
            const onClickHandler = () => {
                setLocalValue(option);
                onChangeOption && onChangeOption(option);
                toggleActive(false);
            }
            return (
                <div className={styles.option} key={v1()}
                     onClick={onClickHandler}>
                    <input type="radio"
                           className={styles.radio}
                           id={option}
                           name={option}
                    />
                    <label htmlFor={option}>
                        {option}
                    </label>
                </div>
            )
        })
        : [];


    return (
        <div className={styles.container}>
            <div className={styles.selectBox}
                 onKeyUp={onKeyUpHandler}
                 tabIndex={0}
                 onBlur={onBlurHandler}>
                <div className={`${styles.optionsContainer} ${active ? styles.active : ''}`}>
                    {mappedOptions}
                </div>

                <div className={styles.selected}
                     onClick={onSelectClick}>
                    {localValue}
                </div>
            </div>
        </div>
    )
        ;
}


export default AlternativeSuperSelect;
