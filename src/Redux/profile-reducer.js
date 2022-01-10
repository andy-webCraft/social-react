import { ProfileAPI } from "../api/api";
import { toggleFetching } from "./people-reducer";

const SET_PROFILE_ID = "SET-PROFILE-ID";
const SET_USER = "SET-USER";
const SET_STATUS = "SET-STATUS";
const ADD_POST = "ADD-POST";

let initialState = {
  profileId: "",
  status: "",
  userData: {
    userId: "",
    fullName: "",
    aboutMe: "",
    photos: "",
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null,
    },
  },
  posts: [
    {
      id: 1,
      text: "Hello",
      likeCount: 12,
    },
    {
      id: 2,
      text: "Yeah, i'm superman",
      likeCount: 47,
    },
    {
      id: 3,
      text: "No, no, no..it's no good",
      likeCount: 0,
    },
    {
      id: 4,
      text: "This is my last post... Goodbay everyone",
      likeCount: 8,
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_ID:
      return { ...state, profileId: action.profileId };
    case SET_USER:
      return { ...state, userData: action.profileData };
    case SET_STATUS:
      return { ...state, status: action.status };
    case ADD_POST:
      if (action.newPostText) {
        return {
          ...state,
          posts: [
            ...state.posts,
            {
              id: state.posts.length + 1,
              text: action.newPostText,
              likeCount: 0,
            },
          ],
        };
      } else return state;
    default:
      return state;
  }
};

export const setProfileId = (profileId) => {
  return { type: SET_PROFILE_ID, profileId };
};

export const setUser = (profileData) => {
  return { type: SET_USER, profileData };
};

export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const addPost = (newPostText) => {
  return { type: ADD_POST, newPostText: newPostText };
};

export const getUserId = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await ProfileAPI.getProfile(userId);
    dispatch(setUser(response.data));
    dispatch(toggleFetching(false));
  };
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
  };
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };
};

export default profileReducer;
