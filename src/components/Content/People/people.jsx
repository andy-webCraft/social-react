import React from "react";
import style from './people.module.css'
import userAvatar from "../../../assets/img/user.png"
import { NavLink } from "react-router-dom";
import User from "./user";

let People = (props) => {
    // debugger
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    // debugger
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
                {props.people.map((item) =>
                    <User user={item} isFollowingProgress={props.isFollowingProgress}
                        following={props.following} unFollowing={props.unFollowing} key={item.id} />
                )}
            </ul>
            <button className={style.showMore}>Show More</button>
        </div>
    )
}

export default People
