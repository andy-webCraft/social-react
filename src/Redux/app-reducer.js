import { checkAuth } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = "SET-INITIALIZED-SUCCESS";
const TOGGLE_APP_THEME = "TOGGLE-APP-THEME";

let initialState = {
  initialized: false,
  theme: "light",
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    case TOGGLE_APP_THEME:
      return { ...state, theme: action.theme };
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

export const toogleAppTheme = (theme) => {
  return { type: TOGGLE_APP_THEME, theme };
};

export default appReducer;
