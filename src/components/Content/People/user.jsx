import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './people.module.scss'
import userAvatar from "../../../assets/img/user.png"

const User = ({ user, isFollowingProgress, following, unFollowing, isAuthorized }) => {
    return (
        <li key={user.id} className={style.item}>
            <NavLink to={"/profile/" + user.id}>
                <div className={style.info}>
                    <div className={style.avatar}>
                        <img src={user.avatar != null ? user.avatar : userAvatar} alt="avatar" className="img" />
                    </div>
                    <div className={style.text}>
                        <p className={style.name}>{user.name}</p>
                        <p className={style.phrase}>{user.phrase}</p>
                    </div>
                </div>
            </NavLink>
            <div className={style.loca}>
                <p className={style.contry}>{user.contry}</p>
                <p className={style.city}>{user.city}</p>
            </div>
            {isAuthorized &&
                <div className={style.action}>
                    {user.followed
                        ? <button
                            disabled={isFollowingProgress.some(id => id === user.id)}
                            onClick={() => { unFollowing(user.id) }}>Unfollow</button>
                        : <button
                            disabled={isFollowingProgress.some(id => id === user.id)}
                            onClick={() => { following(user.id) }}>Follow</button>
                    }
                </div>
            }
        </li>
    )
}

export default User