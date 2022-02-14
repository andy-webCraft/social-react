import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from 'react-router-dom';
import style from './sidebar.module.scss'
import { faUser, faUserGroup, faMessage, faLayerGroup, faPeopleArrows } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({ navData }) => {
    const icons = { faUser, faUserGroup, faMessage, faLayerGroup, faPeopleArrows }

    const nav = navData.map((item) => {
        return (
            <li key={item.id} className={style.item}>
                <NavLink to={`/${item.to}`}>
                    <FontAwesomeIcon className={style.icon} icon={icons[item.icon]} />
                    {item.name}
                </NavLink>
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

export default Sidebar