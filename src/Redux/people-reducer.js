import { UsersAPI } from "../api/api";

const SET_USERS = "SET-USERS";
const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_PAGE = "SET-PAGE";
const FETCHING_TOGGLE = "FETCHING-TOGGLE";
const FOLLOWING_TOGGLE = "FOLLOWING-TOGGLE";

let intinalState = {
  people: [],
  pageSize: 5,
  totalUsersCount: 25,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

let peopleReducer = (state = intinalState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, people: [...action.users] };
    case FETCHING_TOGGLE:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOW:
      return {
        ...state,
        people: state.people.map((item) => {
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

export const setUsers = (users) => {
  return { type: SET_USERS, users: users };
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
  return (dispatch) => {
    dispatch(toggleFetching(true));
    UsersAPI.getUsers(currentPage, pageSize).then((response) => {
      dispatch(setUsers(response.data.items));
      dispatch(toggleFetching(false));
    });
  };
};

export const following = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    UsersAPI.setFollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(toggleFollow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export const unFollowing = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    UsersAPI.setUnfollow(id).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(toggleFollow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
    });
  };
};

export default peopleReducer;
