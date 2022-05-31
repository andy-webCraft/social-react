import React, { useEffect, useState } from "react";
import style from './profile.module.scss'
import userAvatar from "../../../assets/img/user.png"
import { reset } from "redux-form";
import ProfileStatus from "./profile-status/profile-status";
import { ProfileInfo, ProfileInfoForm } from "./profile-info/profile-info";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'
import ProfilePostsReduxForm from "./profile-posts/profile-posts";

const Profile = ({ userData, profileId, status, updateStatus, posts, addPost, uploadProfilePhoto, changeProfileInfo, userLikesPostsId, likeToggle }) => {

    let isUserProfile = userData.userId === profileId
    let initialValuesForm;
    if (isUserProfile) {
        initialValuesForm = { ...userData, contacts: { ...userData.contacts } }
        delete initialValuesForm.userId
        delete initialValuesForm.photos
    }

    let [editMode, setEditMode] = useState(false)
    const toggleEditMode = () => setEditMode(!editMode);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        if (JSON.stringify(formData) !== JSON.stringify(initialValuesForm)) {
            let payload = { userId: userData.userId, ...formData }
            changeProfileInfo(payload)/*.then(
                () => toggleEditMode()       // refact this
            )*/
        } else toggleEditMode()
    }

    return (
        <div className="profile">
            <div className={style.top}>
                <div className={style.avatar}>
                    <img src={userData.photos.large ? userData.photos.large : userAvatar} alt="avatar" className="img" />

                    {isUserProfile &&
                        <Tooltip title="click for change photo" delay="400" animation="fade">
                            <label className={style.uploadPhoto}>
                                <input type="file" name="profilePhoto" onChange={setProfilePhoto} />
                            </label>
                        </Tooltip>
                    }

                </div>
                <div className={style.info}>
                    <p className={style.name}>{userData.fullName}</p>

                    {isUserProfile
                        ? <ProfileStatus status={status} updateStatus={updateStatus} />
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
            <ProfilePostsReduxForm posts={posts} onSubmit={addPostHandle}
                isUserProfile={isUserProfile} userLikesPostsId={userLikesPostsId} likeToggle={likeToggle} />
        </div>
    )
}

export default Profile