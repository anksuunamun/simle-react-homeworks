import React from 'react';
import s from './Error404.module.css';


function Error404() {
    return (
        // <div>
        //     <div>404</div>
        //     <div>Page not found!</div>
        //     <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        // </div>

        <div className={s.div}>
            <div className={s.face}>
                <div className={s.band}>
                    <div className={s.red}></div>
                    <div className={s.white}></div>
                    <div className={s.blue}></div>
                </div>
                <div className={s.eyes}></div>
                <div className={s.dimples}></div>
                <div className={s.mouth}></div>
            </div>

            <h1>404</h1>
            <h1>Page not found!</h1>


        </div>


    )

}

export default Error404;
