import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperRange.module.css';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange: (value: number) => void
    value: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    // const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    //     onChange && onChange(e); // сохраняем старую функциональность
    //
    //     onChangeRange && onChangeRange(+e.currentTarget.value);
    // }
    const onChangeCallback = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange(newValue as number)
    };

    const finalRangeClassName = `${s.range} ${className ? className : ''}`;

    return (
        <>
            <div>
                <Typography id="range-slider" gutterBottom>
                </Typography>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    color={'secondary'}

                />
            </div>
        </>
    );
}


export default SuperRange;
