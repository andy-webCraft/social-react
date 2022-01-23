import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { loginAuth } from './../../../Redux/auth-reducer'
import { required } from '../../../tools/validators';
import { Input } from '../../common/formControl/formControl';
import style from "./login.module.css"
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = ({ isLogin, captchaUrl, loginAuth }) => {
    const login = (formData) => {
        let { email, password, remember, captcha } = formData
        loginAuth(email, password, remember, captcha)
    }

    if (isLogin) return <Navigate to="/profile" />

    return (
        <div className="login">
            <span>Login</span>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={login} />
        </div>
    )
}

const LoginForm = ({ handleSubmit, captchaUrl, error }) => {
    return (
        <form onSubmit={handleSubmit} className={style.form}>
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
            {error && <p className="formSummaryError">{error}</p>}
            {captchaUrl && <div>
                <span>Please, enter anti-bot code</span>
                <img src={captchaUrl} alt="captcha" />
                <Field
                    component={Input}
                    className={style.input}
                    type="text"
                    name="captcha"
                    id='captcha'
                    validate={[required]}
                />
            </div>}
            <button className={style.submit}>Login</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm)

const mapStateToProps = (state) => {
    return {
        isLogin: state.Auth.isLogin,
        captchaUrl: state.Auth.captchaUrl,
    }
}

export default connect(mapStateToProps, { loginAuth })(Login) 