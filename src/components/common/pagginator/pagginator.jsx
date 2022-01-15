import React, { useEffect } from 'react';
import { useState } from 'react';
import style from "./pagginator.module.css"

const Pagginator = ({ totalUsersCount, pageSize, currentPage, setCurrentPage, portionPagesSize = 10 }) => {
    let [currentPortion, setCurrentPortion] = useState(1)
    let pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let startPortionNumber = (currentPortion - 1) * portionPagesSize + 1
    let endPortionNumber = currentPortion * portionPagesSize

    useEffect(() => setCurrentPortion(Math.ceil(currentPage / portionPagesSize)), [currentPage, portionPagesSize]);

    return (
        <div className={style.paggination}>

            {currentPortion > 1 &&
                <button
                    className={style.paggBtn}
                    onClick={() => setCurrentPortion(currentPortion - 1)}
                >Prev</button>
            }

            <div className={style.list}>
                {pages.filter(item => item >= startPortionNumber && item <= endPortionNumber)
                    .map(item => {
                        return (
                            <span
                                key={item}
                                className={currentPage === item ? style.selectedPage : null}
                                onClick={() => setCurrentPage(item)}
                            >{item}</span>
                        )
                    })}
            </div>

            {pageCount > currentPortion &&
                <button
                    className={style.paggBtn}
                    onClick={() => setCurrentPortion(currentPortion + 1)}
                >Next</button>
            }
        </div>
    )
}

export default Pagginator