import { connect } from 'react-redux';
import { logoutAuth } from '../../Redux/auth-reducer';
import { toogleAppTheme } from './../../Redux/app-reducer'
import Header from './header';

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        login: state.auth.login,
        theme: state.app.theme,
        profileAvatar: state.auth.avatar,
    }
}

const HeaderContainer = connect(mapStateToProps, { logoutAuth, toogleAppTheme })(Header)

export default HeaderContainer
