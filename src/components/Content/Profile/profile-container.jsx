import React from "react"
import { getUserId, getStatus, updateStatus, addPost } from "../../../Redux/profile-reducer";
import { connect } from "react-redux";
import Profile from './profile'
import Preloader from "../../common/preloader/preloader";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.math ? this.props.math.params.userId : this.props.profileId;
        if (userId) {
            this.props.getUserId(userId)
            this.props.getStatus(userId)
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
        profileId: state.ProfilePage.profileId,
        userData: state.ProfilePage.userData,
        status: state.ProfilePage.status,
        posts: state.ProfilePage.posts,
        isFetching: state.PeoplePage.isFetching,
    }
}

export default compose(
    connect(mapStateToProps, { getUserId, getStatus, updateStatus, addPost }),
    withAuthRedirect
)(ProfileContainer)
