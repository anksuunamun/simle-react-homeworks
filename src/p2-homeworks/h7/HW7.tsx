import React, {useState} from 'react';
import SuperSelect from './common/c5-SuperSelect/SuperSelect';
import SuperRadio from './common/c6-SuperRadio/SuperRadio';
import styles from './HW7.module.css';
import AlternativeSuperSelect from './common/c5-SuperSelect/AlternativeSuperSelect';

const arr = ['x', 'y', 'z', 'a', 'b', 'c'];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);

    return (
        <div>
            <hr/>
            homeworks 7

            {/*should work (должно работать)*/}
            <div className={styles.selectWrapper}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div className={styles.radioWrapper}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>
            <div>
                <AlternativeSuperSelect
                    options={arr}
                    onChangeOption={onChangeOption}
                    value={value}/>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    );
}

export default HW7;
