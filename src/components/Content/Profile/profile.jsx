import React, { useState } from "react";
import style from './profile.module.css'
import userAvatar from "../../../assets/img/user.png"
import ProfileStatus from "./profile-status"
import { Field, reduxForm, reset } from "redux-form";
import { maxLengthCreator, required } from "../../../tools/validators";
import { TextArea } from "../../common/formControl/formControl";
import ProfileStatusWithHooks from "./profile-statusWithHooks";
import { ProfileInfo, ProfileInfoForm } from "./profile-info";

const maxLength10 = maxLengthCreator(10)

const Profile = ({ userData, profileId, status, updateStatus, posts, addPost, uploadProfilePhoto, changeProfileInfo }) => {

    const isUserProfile = userData.userId === profileId
    let initialValuesForm;
    if (isUserProfile) {
        initialValuesForm = { ...userData, contacts: { ...userData.contacts } }
        delete initialValuesForm.userId
        delete initialValuesForm.photos
    }

    let [editMode, setEditMode] = useState(false)
    const toggleEditMode = () => setEditMode(!editMode);



    const addPostHandle = (formData, dispatch) => {
        addPost(formData.newPostText)
        dispatch(reset("profilePost"))
    }

    const setProfilePhoto = (e) => {
        if (e.target.files.length) {
            uploadProfilePhoto(e.target.files[0])
        }
    }

    const setProfileInfo = (formData) => {
        let payload = { userId: userData.userId, ...formData }
        changeProfileInfo(payload).then(
            // () => toggleEditMode()
        )
    }

    return (
        <div className="profile">
            <div className={style.top}>
                <div className={style.avatar}>
                    <img src={userData.photos.large ? userData.photos.large : userAvatar} alt="avatar" className="img" />
                    {isUserProfile && <input type={"file"} name="profilePhoto" onChange={setProfilePhoto} />}
                </div>
                <div className={style.info}>
                    <p className={style.name}>{userData.fullName}</p>
                    {profileId === userData.userId
                        ? <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                        : <p>{status}</p>
                    }
                </div>
            </div>
            <div className={style.bottom}>
                {editMode
                    ? <ProfileInfoForm initialValues={initialValuesForm} toggleEditMode={toggleEditMode} onSubmit={setProfileInfo} />
                    : <ProfileInfo userData={userData} toggleEditMode={toggleEditMode} isUserProfile={isUserProfile} />
                }
            </div>
            <ProfileReduxForm posts={posts} onSubmit={addPostHandle} />
        </div>
    )
}

const ProfilePosts = ({ posts, handleSubmit }) => {
    let userPosts = posts.map(((item) => {
        return (
            <div key={item.id} className={style.post}>
                <p className={style.post_text}>{item.text}</p>
                <div className={style.likes}>
                    like
                    <span className={style.like}>{item.likeCount}</span>
                </div>
            </div>
        )
    }))

    return (
        <div className={style.posts}>
            <form onSubmit={handleSubmit} className={style.addPost}>
                <Field
                    component={TextArea}
                    name="newPostText"
                    id="newPostText"
                    placeholder="Write what your think..."
                    cols="100"
                    rows="3"
                    validate={[required, maxLength10]}
                />
                <br />
                <button className={style.add}>Add post</button>
            </form>
            <div className={style.post_wrapper}>
                {userPosts}
            </div>
        </div>
    )
}

const ProfileReduxForm = reduxForm({ form: "profilePost" })(ProfilePosts)

export default Profile