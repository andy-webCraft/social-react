import React from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.css";
import userAvatar from "../../assets/img/user.png"

const Header = (props) => {
    // debugger
    return (
        <header>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <NavLink to={'/profile'}>
                            <img
                                src='https://heilpraktiker-erftstadt.de/wp-content/uploads/2013/03/logo-1446293_1920-300x236.png'
                                alt="logo"
                                className='img'
                            />
                        </NavLink>
                    </div>
                    <div className={style.info}>
                        <p className={style.phone}>+7 499 999 99 99</p>
                        <p className={style.mail}>blabla@bla.ru</p>
                    </div>
                    <div className={style.auth}>
                        {props.isLogin
                            ? <div className={style.profile}>
                                <NavLink className={style.profileInfo} to='/profile'>
                                    <img src={props.profileAvatar ? props.profileAvatar : userAvatar} alt="avatar" className={style.avatar} />
                                    <span>{props.login}</span>
                                </NavLink>
                                <button className={style.logoutBtn} onClick={props.logoutAuth}>Logout</button>
                            </div>
                            : <NavLink className="greenBtn" to='/login'>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
