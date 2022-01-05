import React from "react";
import style from './profile.module.css'
import userAvatar from "../../../assets/img/user.png"
import ProfileStatus from "./profile-status"
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../tools/validators";
import { TextArea } from "../../common/formControl/formControl";

const maxLength10 = maxLengthCreator(10)

const Profile = (props) => {
    const addPost = (formData) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className="profile">
            <div className={style.top}>
                <div className={style.avatar}>
                    <img src={props.userData.photos.large ? props.userData.photos.large : userAvatar} alt="avatar" className="img" />
                </div>
                <div className={style.info}>
                    <p className={style.name}>{props.userData.fullName}</p>
                    {props.profileId === props.userData.userId
                        ? <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                        : <p>{props.status}</p>
                    }
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.description}>
                    <span>Contacts</span>
                    <ul className={style.list}>
                        {Object.entries(props.userData.contacts).map(([key, value]) => {
                            if (value != null) return <li key={key} className={style.item}><b>{key}:</b> {value}</li>
                            else return null
                        })}
                    </ul>
                </div>
            </div>
            <ProfileReduxForm posts={props.posts} onSubmit={addPost} />
        </div>
    )
}

const ProfilePosts = (props) => {
    let posts = props.posts.map(((item) => {
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
            <form onSubmit={props.handleSubmit} className={style.addPost}>
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
                {posts}
            </div>
        </div>
    )
}

const ProfileReduxForm = reduxForm({ form: "profilePost" })(ProfilePosts)

export default Profile