import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";
import userAvatar from "../../assets/img/user.png"
import logo from "../../assets/img/logo.jpg"
import DropdownMenu from "../common/dropdownMenu/dropdownMenu";
import ToggleBtn from "../common/buttons/toggleBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons"

const Header = ({ isLogin, login, profileAvatar, logoutAuth, theme, toogleAppTheme }) => {

    let [currentTheme, setCurrentTheme] = useState(theme)

    setCurrentTheme = () => {
        currentTheme = theme === "light" ? "dark" : "light"
        toogleAppTheme(currentTheme)
        localStorage.setItem("theme", currentTheme)
    }

    return (
        <header>
            <div className="container">
                <div className={style.wrapper}>
                    <div className={style.logo}>
                        <NavLink to={'/'}>
                            <img
                                src={logo}
                                alt="logo"
                                className='img'
                            />
                        </NavLink>
                    </div>
                    <div className={style.info}>
                        <p className={style.title}>Samurai Network</p>
                        <p className={style.subtitle}>for the best of the best samurai</p>
                    </div>
                    <div className={style.auth}>
                        {isLogin
                            ? <div className={style.profile}>
                                <NavLink className={style.profileInfo} to='/profile'>
                                    <div className={style.avatar}>
                                        <img src={profileAvatar ? profileAvatar : userAvatar} alt="avatar" className="img" />
                                    </div>
                                </NavLink>
                                <DropdownMenu title={login} linkTitle='/profile'>
                                    <NavLink to='/profile'>go profile</NavLink>
                                    <div className={style.themeToggle}>
                                        <FontAwesomeIcon icon={faSun} />
                                        <ToggleBtn name='themeToggle' action={setCurrentTheme} initial={currentTheme === 'dark' ? true : false} />
                                        <FontAwesomeIcon icon={faMoon} />
                                    </div>
                                    <button onClick={logoutAuth}>Logout</button>
                                </DropdownMenu>
                            </div>
                            : <NavLink className="greenBtn" to='/login'>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header;
