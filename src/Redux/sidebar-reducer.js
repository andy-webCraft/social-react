let initialState = {
  navData: [
    { id: 1, name: "Профиль", to: "profile", icon: "faUser" },
    { id: 2, name: "Друзья", to: "friends", icon: "faUserGroup" },
    { id: 3, name: "Сообщения", to: "message", icon: "faMessage" },
    { id: 4, name: "Группы", to: "group", icon: "faLayerGroup" },
    { id: 5, name: "Люди", to: "people", icon: "faPeopleArrows" },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;
