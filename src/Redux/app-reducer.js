import { checkAuth } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED-SUCCESS";

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return { type: SET_INITIALIZED_SUCCESS };
};

export const initializedApp = () => {
  return (dispatch) => {
    let authPromise = dispatch(checkAuth());
    Promise.all([authPromise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
