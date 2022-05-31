import React from 'react';
import style from './toggleBtn.module.scss'

const ToggleBtn = ({ name, action, initial }) => {

    return (
        <div className={style.wrapper}>
            <input defaultChecked={initial} type="checkbox" id={name} name={name} onChange={action} />
            <label htmlFor={name}></label>
        </div>
    )
}

export default ToggleBtn;