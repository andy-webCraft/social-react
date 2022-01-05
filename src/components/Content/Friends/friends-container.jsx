import { connect } from "react-redux";
import Friends from './friends'

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer