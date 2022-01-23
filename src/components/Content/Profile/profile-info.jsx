import React, { useState } from "react";
import style from './profile-info.module.css'
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator, required } from "../../../tools/validators";
import { Input } from "../../common/formControl/formControl";

const maxLength10 = maxLengthCreator(10)

const renderFields = (obj, typeField, fieldNamePrefix = null) => {
    switch (typeField) {
        case "text": {
            return Object.entries(obj).map(([key, value]) => {
                if (typeof value !== 'object' && value) return <li key={key} className={style.item}><b>{key}:</b> {value}</li>
                else return null
            })
        }
        case "input": {
            return Object.entries(obj).map(([key, value]) => {
                if (typeof value !== 'object' | value === null) {
                    return <li key={key} className={style.item}><b>{key}:</b>
                        <Field
                            component={Input}
                            name={fieldNamePrefix ? fieldNamePrefix + '.' + key : key}
                            value={value}
                        />
                    </li>
                } else return null
            })
        }
        default: return null
    }
}
export const ProfileInfo = ({ userData, isUserProfile, toggleEditMode }) => {

    return (
        <div className={style.wrapper}>
            <span>Info</span>
            {isUserProfile && <button onClick={toggleEditMode}>Edit</button>}
            <ul className={style.list}>
                {renderFields(userData, "text")}
            </ul>
            <span>Contacts</span>
            <ul className={style.list}>
                {renderFields(userData.contacts, "text", "contacts")}
            </ul>
        </div>
    )
}

const ProfileInfoEdit = ({ initialValues, handleSubmit, error }) => {

    return (
        <div className={style.wrapper}>
            <span>Info</span>
            <form onSubmit={handleSubmit}>
                <button>Save</button>
                {error && <p className="formSummaryError">{error}</p>}
                <ul className={style.list}>
                    {renderFields(initialValues, "input")}
                    <span>Contacts</span>
                    {renderFields(initialValues.contacts, "input", "contacts")}
                </ul>
            </form>
        </div>
    )
}

export const ProfileInfoForm = reduxForm({ form: "profileInfoForm" })(ProfileInfoEdit)