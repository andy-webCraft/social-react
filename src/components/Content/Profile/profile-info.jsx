import React, { useState } from "react";
import style from './profile-info.module.css'
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator, required } from "../../../tools/validators";
import { Input } from "../../common/formControl/formControl";

const maxLength10 = maxLengthCreator(10)

export const ProfileInfo = ({ contacts, isUserProfile, toggleEditMode }) => {

    return (
        <div className={style.wrapper}>
            <span>Contacts</span>
            <br />
            {isUserProfile && <button onClick={toggleEditMode}>Edit</button>}
            <ul className={style.list}>
                {Object.entries(contacts).map(([key, value]) => {
                    if (value != null && value !== '') return <li key={key} className={style.item}><b>{key}:</b> {value}</li>
                    else return null
                })}
            </ul>
        </div>
    )
}

const ProfileInfoEdit = ({ initialValues, handleSubmit, error }) => {

    const renderFields = (obj, fieldNamePrefix = null) => {
        return Object.entries(obj).map(([key, value]) => {
            if (value === null | typeof value !== 'object') {
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

    return (
        <div className={style.wrapper}>
            <span>Info</span>
            <form onSubmit={handleSubmit}>
                <button>Save</button>
                {error && <p className="formSummaryError">{error}</p>}
                <ul className={style.list}>
                    {renderFields(initialValues)}
                    <span>Contacts</span>
                    {renderFields(initialValues.contacts, "contacts")}
                </ul>
            </form>
        </div>
    )
}

export const ProfileInfoForm = reduxForm({ form: "profileInfoForm" })(ProfileInfoEdit)