import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import friendsReducer from "./friends-reducer";
import groupReducer from "./group-reducer";
import messageReducer from "./message-reducer";
import peopleReducer from "./people-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";
import { reducer as FormReducere } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  app: appReducer,
  auth: authReducer,
  sidebar: sideBarReducer,
  profilePage: profileReducer,
  friendsPage: friendsReducer,
  messagePage: messageReducer,
  groupPage: groupReducer,
  peoplePage: peopleReducer,
  form: FormReducere,
});

let forReduxDevTools = applyMiddleware(thunkMiddleware)(createStore)

let store = forReduxDevTools(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
