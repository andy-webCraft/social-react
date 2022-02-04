import React, { useEffect } from "react"
import { getUserId, getStatus, updateStatus, addPost, uploadProfilePhoto, changeProfileInfo } from "../../../Redux/profile-reducer";
import { connect } from "react-redux";
import Profile from './profile'
import Preloader from "../../common/preloader/preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useState } from "react";

// class ProfileContainer extends React.Component {

//     setUserData() {
//         let userId = this.props.math ? this.props.math.params.userId : this.props.profileId;
//         if (userId) {
//             this.props.getUserId(userId)
//             this.props.getStatus(userId)
//         }
//     }

//     componentDidMount() {
//         this.setUserData()
//     }

//     componentDidUpdate(prevProps) {
//         if (this.props.math !== prevProps.math) {
//             this.setUserData()
//         }
//     }

//     render() {
//         return (
//             <>
//                 {this.props.isFetching ? <Preloader /> : <Profile {...this.props} />}
//             </>
//         )
//     }
// }

const ProfileContainer = (props) => {

    useEffect(() => {
        let id = props.math ? props.math.params.userId : props.profileId;
        props.getUserId(id)
        props.getStatus(id)
    }, [props.math])

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
        isFetching: state.peoplePage.isFetching,
    }
}

let mapDispatchToProps = {
    getUserId, getStatus, updateStatus, addPost, uploadProfilePhoto, changeProfileInfo
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileContainer)
