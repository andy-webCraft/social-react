import React from "react";
import style from './people.module.css'
import User from "./user";
import Pagginator from "../../common/pagginator/pagginator";

let People = (props) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    // let pages = []
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i)
    // }

    return (
        <div className="people">

            <Pagginator
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />

            {/* <div className={style.paggination}>
                {pages.map(item => {
                    return (
                        <span
                            key={item}
                            className={props.currentPage === item ? style.selectedPage : null}
                            onClick={() => props.setCurrentPage(item)}
                        >{item}</span>
                    )
                })}
            </div> */}
            <ul className={style.list}>
                {props.currentPeople.map((item) =>
                    <User user={item} isFollowingProgress={props.isFollowingProgress}
                        following={props.following} unFollowing={props.unFollowing} key={item.id} />
                )}
            </ul>
            <button className={style.showMore}>Show More</button>
        </div>
    )
}

export default People
