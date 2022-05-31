import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, setPage, following, unFollowing, getMoreUsers, } from "../../../Redux/people-reducer";
import People from "./people";
import Preloader from "../../common/preloader/preloader";
import { getCurrentPage, getIsFetching, getIsFollowingProgress, getPageSize, getPeople, getTotalUsersCount } from "../../../Redux/selectors/people-selectors";


const PeopleContainer = (props) => {

    let { getUsers, currentPage, pageSize } = props

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, []) 
    
    const setCurrentPage = (currentPage) => {
        props.setPage(currentPage)
        props.getUsers(currentPage, pageSize)
    }

    const setMoreUsers = () => {
        props.setPage(currentPage + 1)
        props.getMoreUsers(currentPage + 1, pageSize)
    }

    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <People {...props} setCurrentPage={setCurrentPage} setMoreUsers={setMoreUsers} />}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        currentPeople: getPeople(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowingProgress: getIsFollowingProgress(state),
        isAuthorized: state.auth.isLogin
    }
}

export default connect(mapStateToProps, { getUsers, setPage, following, unFollowing, getMoreUsers })(PeopleContainer)