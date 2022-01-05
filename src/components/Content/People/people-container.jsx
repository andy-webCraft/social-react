import React from "react";
import { connect } from "react-redux";
import { getUsers, setPage, following, unFollowing, } from "../../../Redux/people-reducer";
import People from "./people";
import Preloader from "../../common/preloader/preloader";

class PeopleContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setCurrentPage = (currentPage) => {
        this.props.setPage(currentPage)
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    toggleFollow = (id) => {
        this.props.toggleFollow(id)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <People
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        people={this.props.people}
                        setCurrentPage={this.setCurrentPage}
                        isFollowingProgress={this.props.isFollowingProgress}
                        following={this.props.following}
                        unFollowing={this.props.unFollowing}
                    />}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        people: state.PeoplePage.people,
        pageSize: state.PeoplePage.pageSize,
        totalUsersCount: state.PeoplePage.totalUsersCount,
        currentPage: state.PeoplePage.currentPage,
        isFetching: state.PeoplePage.isFetching,
        isFollowingProgress: state.PeoplePage.isFollowingProgress
    }
}

export default connect(mapStateToProps, { getUsers, setPage, following, unFollowing, })(PeopleContainer)