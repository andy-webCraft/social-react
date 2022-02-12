import React from 'react';
import { NavLink } from 'react-router-dom';

const DropdownItem = ({ item }) => {
    switch (item.type) {
        case "link": return <NavLink to={item.action}>{item.title}</NavLink>
        case "btn": return <button onClick={item.action}>{item.title}</button>
        case "text": return <span>{item.title}</span>
        default: return
    }

}

export default DropdownItem