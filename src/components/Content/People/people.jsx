import React from "react";
import style from './people.module.css'
import User from "./user";
import Pagginator from "../../common/pagginator/pagginator";

let People = ({ currentPeople, totalUsersCount, pageSize, currentPage, setCurrentPage, isFollowingProgress, following, unFollowing }) => {

    return (
        <div className="people">

            <Pagginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            <ul className={style.list}>
                {currentPeople.map((item) =>
                    <User user={item} isFollowingProgress={isFollowingProgress}
                        following={following} unFollowing={unFollowing} key={item.id} />
                )}
            </ul>
            <button className={style.showMore}>Show More</button>
        </div>
    )
}

export default People
