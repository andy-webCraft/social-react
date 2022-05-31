import { connect } from 'react-redux'
import Sidebar from './sidebar'

let mapStateToProps = (state) => {
    return {
        navData: state.sidebar.navData
    }
}

const SidebarContainer = connect(mapStateToProps, {})(Sidebar)

export default SidebarContainer