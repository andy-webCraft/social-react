import { addMessage } from "../../../Redux/message-reducer";
import { connect } from "react-redux";
import Message from './message'
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        messages: state.messagePage.messages,
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Message)