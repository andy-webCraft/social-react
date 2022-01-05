import React from 'react';
import { connect } from 'react-redux';
import { checkAuth, logoutAuth } from '../../Redux/auth-reducer';
import Header from './header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.checkAuth()
    }

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

export default connect(mapStateToProps, { checkAuth, logoutAuth })(HeaderContainer)
