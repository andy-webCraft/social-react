import { connect } from 'react-redux'
import sidebar from './sidebar'

let mapStateToProps = (state) => {
    return {
        navData: state.sidebar.navData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(sidebar)

export default SidebarContainer