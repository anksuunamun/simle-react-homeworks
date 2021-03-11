import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {SetLoadingAC} from './bll/loadingReducer';
import preloader from './preloader.gif';

function HW10() {
    // useSelector, useDispatch
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading);
    let dispatch = useDispatch();

    const setLoading = () => {
        // dispatch
        dispatch(SetLoadingAC(true));
        // setTimeout
        setTimeout(() => dispatch(SetLoadingAC(false)), 2000);
        console.log('loading...');
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} alt=""/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
