import React from "react";
import style from './friends.module.css'

const Friends = (props) => {
    let FriendsItem = props.friends.map((item) => {
        return (
            <li key={item.id} className={style.item}>
                <div className={style.avatar}>
                    <img src={item.avatar} alt="avatar" className="img" />
                </div>
                <div className={style.info}>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.status}>{item.status}</p>
                </div>
            </li>
        )
    }
    )

    return (
        <div className="friends">
            <ul className={style.list}>
                {FriendsItem}
            </ul>
        </div>
    )
}

export default Friends