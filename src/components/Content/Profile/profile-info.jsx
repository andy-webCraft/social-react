import React from "react";
import style from './profile-info.module.scss'
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../tools/validators";
import { Input } from "../../common/formControl/formControl";

const maxLength20 = maxLengthCreator(20)

const renderFields = (obj, typeField, fieldNamePrefix = null) => {
    switch (typeField) {
        case "text": {
            return Object.entries(obj).map(([key, value]) => {
                if (typeof value !== 'object' && value !== "") {
                    let valueField = value
                    if (typeof valueField === "boolean") {
                        valueField = valueField === true ? "yes" : "no"
                    }
                    return <li key={key} className={style.item}>
                        <b>{key}:</b>
                        <span>{valueField}</span>
                    </li>
                }
                else return null
            })
        }
        case "input": {
            return Object.entries(obj).map(([key, value]) => {
                if (typeof value !== 'object' | value === null) {
                    return <li key={key} className={style.item}><b>{key}:</b>
                        <Field
                            component={Input}
                            type={typeof value === "boolean" ? "checkbox" : "text"}
                            name={fieldNamePrefix ? fieldNamePrefix + '.' + key : key}
                            value={value}
                            validate={maxLength20}
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
            <div className="title_wrap">
                <span>Info</span>
                {isUserProfile && <button onClick={toggleEditMode}>Edit</button>}
            </div>
            <ul className={style.list}>
                {renderFields(userData, "text")}
            </ul>
            <div className="title_wrap">
                <span>Contacts</span>
            </div>
            <ul className={style.list}>
                {renderFields(userData.contacts, "text", "contacts")}
            </ul>
        </div>
    )
}

const ProfileInfoEdit = ({ initialValues, handleSubmit, error }) => {

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit}>
                <div className="title_wrap">
                    <span>Info</span>
                    <button>Save</button>
                </div>
                {/* {error && <p className="formSummaryError">{error}</p>} */}
                <ul className={style.list}>
                    {renderFields(initialValues, "input")}
                    <div className="title_wrap">
                        <span>Contacts</span>
                    </div>
                    {renderFields(initialValues.contacts, "input", "contacts")}
                </ul>
            </form>
        </div>
    )
}

export const ProfileInfoForm = reduxForm({ form: "profileInfoForm" })(ProfileInfoEdit)