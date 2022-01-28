import React from 'react';
import { connect } from 'react-redux';
import { logoutAuth } from '../../Redux/auth-reducer';
import Header from './header';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
        login: state.auth.login,
        profileAvatar: state.auth.avatar,
        // captcha: state.auth.captcha,
    }
}

export default connect(mapStateToProps, { logoutAuth })(HeaderContainer)
