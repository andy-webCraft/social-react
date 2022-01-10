import React, { useState } from 'react';
import { useEffect } from 'react';
import style from "./profile.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [statusText, setStatusText] = useState(props.status)

    useEffect(() => {
        setStatusText(props.status)
    }, [props.status])

    const toggleeEditMode = () => {
        setEditMode(!editMode)
        props.updateStatus(statusText)
    }

    const changeStatusText = (event) => {
        setStatusText(event.currentTarget.value)
    }

    return (
        <div className={style.status}>
            {!editMode
                ? <p onClick={toggleeEditMode}>
                    {props.status ? props.status : "press click for change your status..."}
                </p>
                : <input onBlur={toggleeEditMode}
                    autoFocus={true}
                    onChange={changeStatusText}
                    value={statusText}
                    type="text" name="status" id="profileStatus" />
            }
        </div>
    )
}

export default ProfileStatusWithHooks