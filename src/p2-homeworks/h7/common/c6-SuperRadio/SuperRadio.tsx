import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperRadio.module.css';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

 const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChangeOption && onChangeOption(e.currentTarget.value)
        console.log('changed', e.currentTarget.value)
    }
    console.log('inside value', value)
    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                // name, checked, value, onChange
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={value === o}
                className={s.radioInput}
                {...restProps}
            />
            <span className={s.fakeSpan}/>
            <span>{o}</span>
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
}

export default SuperRadio;
