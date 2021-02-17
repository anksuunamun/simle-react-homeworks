import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent, useState} from 'react';
import {v1} from 'uuid';
import styles from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options
        ? options.map(option => <option key={v1()}
                                        className={styles.option}>{option}
        </option>)
        : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value);
    }



    return (
        <select onChange={onChangeCallback}
                {...restProps}
                className={styles.select}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
