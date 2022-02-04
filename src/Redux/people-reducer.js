import { UsersAPI } from "../api/api";

const SET_USERS = "SET-USERS";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_PAGE = "SET-PAGE";
const FETCHING_TOGGLE = "FETCHING-TOGGLE";
const FOLLOWING_TOGGLE = "FOLLOWING-TOGGLE";

let intinalState = {
  currentPeople: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

let peopleReducer = (state = intinalState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        currentPeople: [...action.users],
        totalUsersCount: action.totalUsersCount,
      };
    case FETCHING_TOGGLE:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOW:
      return {
        ...state,
        currentPeople: state.currentPeople.map((item) => {
          if (item.id === action.userId)
            return { ...item, followed: !item.followed };
          else return item;
        }),
      };
    case FOLLOWING_TOGGLE:
      return {
        ...state,
        isFollowingProgress: action.isFollowingProgress
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id !== action.userId),
      };
    case SET_PAGE:
      return { ...state, currentPage: action.currentPage };
    default:
      return state;
  }
};

export const setUsers = (users, totalUsersCount) => {
  return { type: SET_USERS, users: users, totalUsersCount: totalUsersCount };
};

export const toggleFollow = (userId) => {
  return { type: TOGGLE_FOLLOW, userId: userId };
};

export const setPage = (count) => {
  return { type: SET_PAGE, currentPage: count };
};

export const toggleFetching = (isFetching) => {
  return { type: FETCHING_TOGGLE, isFetching: isFetching };
};

export const toggleFollowingProgress = (isFollowingProgress, userId) => {
  return {
    type: FOLLOWING_TOGGLE,
    isFollowingProgress: isFollowingProgress,
    userId: userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleFetching(true));
    let response = await UsersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(response.data.items, response.data.totalCount));
    dispatch(toggleFetching(false));
  };
};

export const following = (id) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    let response = await UsersAPI.setFollow(id);
    if (response.data.resultCode === 0) {
      dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export const unFollowing = (id) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    let response = await UsersAPI.setUnfollow(id);
    if (response.data.resultCode === 0) {
      dispatch(toggleFollow(id));
    }
    dispatch(toggleFollowingProgress(false, id));
  };
};

export default peopleReducer;
