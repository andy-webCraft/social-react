import React, { useEffect } from "react"
import { getUserId, getStatus, updateStatus, addPost, uploadProfilePhoto, changeProfileInfo, likeToggle } from "../../../Redux/profile-reducer";
import { connect } from "react-redux";
import Profile from './profile'
import Preloader from "../../common/preloader/preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


const ProfileContainer = (props) => {

    let { math, profileId, getUserId, getStatus } = props

    useEffect(() => {
        let id = math ? math.params.userId : profileId;
        getUserId(id)
        getStatus(id)
    }, [math, profileId, getUserId, getStatus])

    return (
        props.isFetching ? <Preloader /> : <Profile {...props} />
    )

}

let mapStateToProps = (state) => {
    return {
        profileId: state.profilePage.profileId,
        userData: state.profilePage.userData,
        status: state.profilePage.status,
        posts: state.profilePage.posts,
        userLikesPostsId: state.profilePage.userLikesPostsId,
        isFetching: state.peoplePage.isFetching,
    }
}

let mapDispatchToProps = {
    getUserId, getStatus, updateStatus, addPost, uploadProfilePhoto, changeProfileInfo, likeToggle
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileContainer)
