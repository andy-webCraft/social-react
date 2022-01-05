import React from "react";
import style from './people.module.css'
import userAvatar from "../../../assets/img/user.png"
import { NavLink } from "react-router-dom";

let People = (props) => {
    // debugger
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className="people">
            <div className={style.paggination}>
                {pages.map(item => {
                    return (
                        <span
                            key={item}
                            className={props.currentPage === item ? style.selectedPage : null}
                            onClick={() => props.setCurrentPage(item)}
                        >{item}</span>
                    )
                })}
            </div>
            <ul className={style.list}>
                {props.people.map((item) => {
                    return (
                        <li key={item.id} className={style.item}>
                            <NavLink to={"/profile/" + item.id}>
                                <div className={style.info}>
                                    <div className={style.avatar}>
                                        <img src={item.avatar != null ? item.avatar : userAvatar} alt="avatar" className="img" />
                                    </div>
                                    <div className={style.text}>
                                        <p className={style.name}>{item.name}</p>
                                        <p className={style.phrase}>{item.phrase}</p>
                                    </div>
                                </div>
                            </NavLink>
                            <div className={style.loca}>
                                <p className={style.contry}>{item.contry}</p>
                                <p className={style.city}>{item.city}</p>
                            </div>
                            <div className={style.action}>
                                {item.followed
                                    ? <button
                                        disabled={props.isFollowingProgress.some(id => id === item.id)}
                                        onClick={() => { props.unFollowing(item.id) }}>Unfollow</button>
                                    : <button
                                        disabled={props.isFollowingProgress.some(id => id === item.id)}
                                        onClick={() => { props.following(item.id) }}>Follow</button>
                                }
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
            <button className={style.showMore}>Show More</button>
        </div>
    )
}

export default People
