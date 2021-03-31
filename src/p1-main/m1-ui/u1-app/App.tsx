import React from 'react';
import s from './App.module.css';
import HW5 from '../../../p2-homeworks/h5/HW5';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../../p2-homeworks/h10/bll/store';
import {ThemeType} from '../../../p2-homeworks/h12/bll/themeReducer';
import themeStyles from '../../../p2-homeworks/h12/HW12.module.css'

function App() {
    let theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)
    return (
        <div className={`${s.App} ${themeStyles[theme + '-text']} ${themeStyles[theme]}`}>
            <div>react homeworks:</div>
            {/*<HW1/>*/}
            {/*<HW2/>*/}
            {/*<HW3/>*/}
            {/*<HW4/>*/}
            <HW5/>

        </div>
    );
}

export default App;
