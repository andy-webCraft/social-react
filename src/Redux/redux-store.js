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

let reducers = combineReducers({
  SideBar: sideBarReducer,
  ProfilePage: profileReducer,
  FriendsPage: friendsReducer,
  MessagePage: messageReducer,
  GroupPage: groupReducer,
  PeoplePage: peopleReducer,
  Auth: authReducer,
  form: FormReducere,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store

export default store;