import React from "react"
import { getUserId, getStatus, updateStatus, addPost, uploadProfilePhoto, changeProfileInfo } from "../../../Redux/profile-reducer";
import { connect } from "react-redux";
import Profile from './profile'
import Preloader from "../../common/preloader/preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    setUserData() {
        let userId = this.props.math ? this.props.math.params.userId : this.props.profileId;
        if (userId) {
            this.props.getUserId(userId)
            this.props.getStatus(userId)
        }
    }

    componentDidMount() {
        this.setUserData()
    }

    componentDidUpdate(prevProps) {
        if (this.props.math !== prevProps.math) {
            this.setUserData()
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : <Profile {...this.props} />}
            </>
        )
    }
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

export default compose(
    connect(mapStateToProps, { getUserId, getStatus, updateStatus, addPost, uploadProfilePhoto, changeProfileInfo }),
    withAuthRedirect
)(ProfileContainer)
