import React, { useState } from 'react';
import { useEffect } from 'react';
import style from "../profile.module.scss"
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'

const ProfileStatus = ({ status, updateStatus }) => {

    let [editMode, setEditMode] = useState(false)
    let [statusText, setStatusText] = useState(status)

    useEffect(() => {
        setStatusText(status)
    }, [status])

    const toggleeEditMode = () => {
        setEditMode(!editMode)
        if (status !== statusText) updateStatus(statusText)
    }

    const changeStatusText = (event) => {
        setStatusText(event.currentTarget.value)
    }

    return (
        <div className={style.status}>
            {editMode
                ? <input onBlur={toggleeEditMode}
                    autoFocus={true}
                    onChange={changeStatusText}
                    value={statusText}
                    type="text" name="status" id="profileStatus" />
                : <Tooltip title="click for change status" delay="400" animation="fade">
                    <p onClick={toggleeEditMode}>
                        {status ? status : "press click for change your status..."}
                    </p>
                </Tooltip>
            }
        </div>
    )
}

export default ProfileStatus