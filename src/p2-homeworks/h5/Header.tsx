import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from './Routes';
import s from './Header.module.css';
import menu from './menu.svg';

function Header() {
    const [openBurger, setOpenBurger] = useState<boolean>(false)

    return (
        <div className={s.wrapper}>
            {/*// add NavLinks*/}

            <ul className={`${s.navbar} ${openBurger ? s.activeBurger : s.hidden}`}>
                <li><NavLink to={PATH.PRE_JUNIOR} activeClassName={s.active}>Pre-Junior Page</NavLink></li>
                <li><NavLink to={PATH.JUNIOR} activeClassName={s.active}>Junior Page</NavLink></li>
                <li><NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>Junior-Plus Page</NavLink></li>
            </ul>
            <span onClick={() => setOpenBurger(!openBurger)}><img src={menu} alt="menu"
                                                                  className={`${s.img} ${openBurger ? s.activeMenuLogo : s.hiddenMenuLogo}`}/></span>
        </div>
    );
}

export default Header;
