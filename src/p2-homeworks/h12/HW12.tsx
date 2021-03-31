import React, {useEffect} from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC, ThemeType} from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
// import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';

const themes = ['dark', 'red', 'some', 'yellow', 'darkBlue', 'standard'];

function HW12() {

    let theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback
    console.log(theme);
    const onThemeChange = (theme: ThemeType) => {
        console.log('theme', theme)
        dispatch(changeThemeAC(theme));
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <br/>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio onChangeOption={onThemeChange}
                        options={themes}
                        name={'radio1'}
                        value={theme}
            />

            <hr/>
        </div>
    );
}

export default HW12;
