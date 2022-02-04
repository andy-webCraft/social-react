import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, setPage, following, unFollowing, } from "../../../Redux/people-reducer";
import People from "./people";
import Preloader from "../../common/preloader/preloader";
import { getCurrentPage, getIsFetching, getIsFollowingProgress, getPageSize, getPeople, getTotalUsersCount } from "../../../Redux/selectors/people-selectors";

// class PeopleContainer extends React.Component {
//     componentDidMount() {
//         this.props.getUsers(this.props.currentPage, this.props.pageSize)
//     }

//     setCurrentPage = (currentPage) => {
//         this.props.setPage(currentPage)
//         this.props.getUsers(currentPage, this.props.pageSize)
//     }

//     toggleFollow = (id) => {
//         this.props.toggleFollow(id)
//     }

//     render() {
//         return (
//             <>
//                 {this.props.isFetching
//                     ? <Preloader />
//                     : <People
//                         totalUsersCount={this.props.totalUsersCount}
//                         pageSize={this.props.pageSize}
//                         currentPage={this.props.currentPage}
//                         currentPeople={this.props.currentPeople}
//                         setCurrentPage={this.setCurrentPage}
//                         isFollowingProgress={this.props.isFollowingProgress}
//                         following={this.props.following}
//                         unFollowing={this.props.unFollowing}
//                     />}
//             </>
//         )
//     }
// }

const PeopleContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [props.currentPage, props.pageSize])

    const setCurrentPage = (currentPage) => {
        props.setPage(currentPage)
        props.getUsers(currentPage, props.pageSize)
    }

    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <People {...props} setCurrentPage={setCurrentPage} />}
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
        isFollowingProgress: getIsFollowingProgress(state)
    }
}

export default connect(mapStateToProps, { getUsers, setPage, following, unFollowing, })(PeopleContainer)