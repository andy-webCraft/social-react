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
        isLogin: state.Auth.isLogin,
        login: state.Auth.login
    }
}

export default connect(mapStateToProps, { logoutAuth })(HeaderContainer)
