import { stopSubmit } from "redux-form";
import { AuthAPI, ProfileAPI } from "../api/api";
import { toggleFetching } from "./people-reducer";
import { setProfileId } from "./profile-reducer";

const SET_AUTH_USER_DATA = "SET-AUTH-USER-DATA";
const SET_PROFILE_AVATAR = "SET-PROFILE-AVATAR";

let initialState = {
  userId: null,
  login: null,
  email: null,
  name: null,
  avatar: null,
  isLogin: false,
  isFetching: false,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data };
    case SET_PROFILE_AVATAR:
      return { ...state, avatar: action.avatar };
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

export const loginAuth = (
  email,
  password,
  remember = false,
  captcha = true
) => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    AuthAPI.login(email, password, remember, captcha).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(checkAuth());
      } else {
        let errorMessage =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some Error";
        dispatch(stopSubmit("login", { _error: errorMessage }));
      }
    });
    dispatch(toggleFetching(false));
  };
};

export const logoutAuth = () => {
  return (dispatch) => {
    AuthAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
        dispatch(setProfileAvatar(null));
      }
    });
  };
};

export const checkAuth = () => {
  return (dispatch) => {
    dispatch(toggleFetching(true));
    return AuthAPI.checkAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setProfileId(id));
        dispatch(setAuthUserData(id, login, email, true));
        ProfileAPI.getProfile(id).then((response) => {
          dispatch(setProfileAvatar(response.data.photos.small));
        });
      }
      dispatch(toggleFetching(false));
    });
  };
};

export default authReducer;
