import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isLogin: state.auth.isLogin,
})

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogin) return <Navigate to="/login" />
            return <Component {...this.props} />
        }
    }

    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}