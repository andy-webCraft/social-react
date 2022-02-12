import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import DropdownItem from './dropdownItem';
import style from './dropdownMenu.module.css'
import cn from 'classnames'

const DropdownMenu = ({ title, linkTitle, items, delay = 300 }) => {

    const [menuShow, setMenuShow] = useState(false)
    let timer;

    const menuOpen = () => {
        clearTimeout(timer)
        setMenuShow(true)
    }
    const menuClose = () => timer = setTimeout(() => setMenuShow(false), delay)

    const list = items.map(item => {
        return (
            <DropdownItem key={items.indexOf(item)} item={item} className={style.item} />
        )
    })

    return (
        <div className={cn(style.wrapper, { [style.show]: menuShow })} onMouseEnter={menuOpen} onMouseLeave={menuClose}>
            {linkTitle
                ? <NavLink className={style.title} to={linkTitle}>{title}</NavLink>
                : <span className={style.title}>{title}</span>
            }
            <i className={style.dropIcon}></i>
            <div className={cn(style.body, { [style.show]: menuShow })} >
                <ul className={style.list}>
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default DropdownMenu