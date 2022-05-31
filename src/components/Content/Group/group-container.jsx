import { connect } from "react-redux";
import Group from './group'

let mapStateToProps = (state) => {
    return {
        group: state.groupPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}

const GroupContainer = connect(mapStateToProps, mapDispatchToProps)(Group)

export default GroupContainer