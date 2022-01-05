import { connect } from 'react-redux'
import SideBar from './sidebar'

let mapStateToProps = (state) => {
    return {
        navData: state.SideBar.navData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(SideBar)

export default SidebarContainer