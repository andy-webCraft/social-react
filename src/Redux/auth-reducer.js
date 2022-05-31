import { stopSubmit } from "redux-form";
import { AuthAPI, ProfileAPI, SecurityAPI } from "../api/api";
import { parseErrorsText } from "../tools/parse";
import { toggleFetching } from "./people-reducer";
import { setProfileId } from "./profile-reducer";

const SET_AUTH_USER_DATA = "SET-auth-USER-DATA";
const SET_PROFILE_AVATAR = "SET-PROFILE-AVATAR";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

let initialState = {
  userId: null,
  login: null,
  email: null,
  // name: null,
  avatar: null,
  isLogin: false,
  isFetching: false,
  captcha: null,
  captchaUrl: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data, captcha: null, captchaUrl: null };
    case SET_PROFILE_AVATAR:
      return { ...state, avatar: action.avatar };
    case SET_CAPTCHA_URL:
      return { ...state, captchaUrl: action.captchaUrl };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login = null, email, isLogin) => {
  return { type: SET_AUTH_USER_DATA, data: { userId, login, email, isLogin } };
};

export const setProfileAvatar = (avatar) => {
  return { type: SET_PROFILE_AVATAR, avatar };
};

export const setCaptchaUrl = (captchaUrl) => {
  return { type: SET_CAPTCHA_URL, captchaUrl };
};

export const loginAuth = (email, password, remember, captcha) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await AuthAPI.login(email, password, remember, captcha);
    if (response.data.resultCode === 0) {
      dispatch(checkAuth());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptcha());
      }
      let errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
      // let errors = parseErrorsText(response.data.messages)   // refact this
      dispatch(stopSubmit("login", { _error: errorMessage }));
    }
    dispatch(toggleFetching(false));
  };
};

export const logoutAuth = () => {
  return async (dispatch) => {
    let response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
      dispatch(setProfileAvatar(null));
    }
  };
};

export const checkAuth = () => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await AuthAPI.checkAuth();
    if (response.data.resultCode === 0) {
      let { id, login, email } = response.data.data;
      dispatch(setProfileId(id));
      dispatch(setAuthUserData(id, login, email, true));
      ProfileAPI.getProfile(id).then((response) => {
        dispatch(setProfileAvatar(response.data.photos.small));
      });
    }
    dispatch(toggleFetching(false));
  };
};

export const getCaptcha = () => {
  return async (dispatch) => {
    let response = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrl(captchaUrl));
  };
};

export default authReducer;
