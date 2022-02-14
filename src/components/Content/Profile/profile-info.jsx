import React from "react";
import style from './profile-info.module.scss'
import { reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import renderFields from "../../common/formFields/renderFields";

export const ProfileInfo = ({ userData, isUserProfile, toggleEditMode }) => {

    return (
        <div className={style.wrapper}>
            <div className="title_wrap">
                <span>Info</span>
                {isUserProfile &&
                    <button className={style.editBtn} onClick={toggleEditMode}>
                        <span>edit</span>
                        <FontAwesomeIcon icon={faPenToSquare} size={"lg"} />
                    </button>
                }
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
                    <button className={style.editBtn}>
                        <span>save</span>
                        <FontAwesomeIcon icon={faFloppyDisk} size={"lg"} />
                    </button>
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