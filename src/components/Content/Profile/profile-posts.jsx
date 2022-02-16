import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../tools/validators';
import { TextArea } from '../../common/formControl/formControl';
import style from './profile-posts.module.scss'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const maxLength50 = maxLengthCreator(50)

const ProfilePosts = ({ posts, handleSubmit, isUserProfile, userLikesPostsId, likeToggle }) => {

    let userPosts = posts.map(((item) => {
        return (
            <div key={item.id} className={style.post}>
                <p className={style.post_text}>{item.text}</p>
                <div className={style.likes}>
                    <button className={cn(style.likeBtn, { [style.active]: userLikesPostsId.includes(item.id) })} onClick={() => likeToggle(item.id)}>
                        <FontAwesomeIcon icon={faHeart} size={"lg"} className={style.likeIcon} />
                        <span className={style.like}>{item.likeCount}</span>
                    </button>
                </div>
            </div>
        )
    }))

    return (
        <div className={style.posts}>
            {isUserProfile &&
                <form onSubmit={handleSubmit} className={style.addPost}>
                    <Field
                        component={TextArea}
                        name="newPostText"
                        id="newPostText"
                        placeholder="Write what your think..."
                        cols="100"
                        rows="3"
                        validate={[required, maxLength50]}
                    />
                    <button className={style.add}>Add post</button>
                </form>
            }
            <div className={style.wrapper}>
                {userPosts}
            </div>
        </div>
    )
}

const ProfilePostsReduxForm = reduxForm({ form: "profilePost" })(ProfilePosts)
export default ProfilePostsReduxForm