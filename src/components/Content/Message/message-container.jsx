import { addMessage } from "../../../Redux/message-reducer";
import { connect } from "react-redux";
import Message from './message'
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        messages: state.MessagePage.messages,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Message)