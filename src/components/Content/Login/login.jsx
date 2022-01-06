import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginAuth } from './../../../Redux/auth-reducer'
import { required } from '../../../tools/validators';
import { Input } from '../../common/formControl/formControl';
import style from "./login.module.css"
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    const login = (formData) => {
        let { email, password, remember } = formData
        props.loginAuth(email, password, remember)
    }

    if (props.isLogin) return <Navigate to="/profile" />

    return (
        <div className="login">
            <span>Login</span>
            <LoginReduxForm onSubmit={login} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.form}>
            <Field
                component={Input}
                className={style.input}
                type="email"
                name="email"
                placeholder='your email'
                validate={[required]}
            />
            <Field
                component={Input}
                className={style.input}
                type="password"
                name="password"
                placeholder='your password'
                validate={[required]}
            />
            <label className={style.checkbox} htmlFor="remember">
                <Field
                    component={Input}
                    type="checkbox"
                    name="remember"
                    id='remember'
                />
                remember me
            </label>
            {props.error && <p className="formSummaryError">{props.error}</p>}
            <button className={style.submit}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const mapStateToProps = (state) => {
    return {
        isLogin: state.Auth.isLogin
    }
}

export default connect(mapStateToProps, { loginAuth })(Login) 