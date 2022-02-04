import { connect } from 'react-redux';
import { logoutAuth } from '../../Redux/auth-reducer';
import Header from './header';

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        login: state.auth.login,
        profileAvatar: state.auth.avatar,
    }
}

const HeaderContainer = connect(mapStateToProps, { logoutAuth })(Header)

export default HeaderContainer
