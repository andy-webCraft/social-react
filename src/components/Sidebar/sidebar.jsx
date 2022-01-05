import React from "react";
import { NavLink } from 'react-router-dom';
import style from './sidebar.module.css'

const SideBar = (props) => {
    let nav = props.navData.map((item) => {
        return (
            <li key={item.id} className={style.item}>
                <NavLink to={`/${item.to}`}>{item.name}</NavLink>
            </li>
        )
    })

    return (
        <div className="sidebar">
            <ul className={style.menu}>
                {nav}
            </ul>
        </div>
    )
}

export default SideBar