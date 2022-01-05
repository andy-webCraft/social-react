let initialState = {
  navData: [
    { id: 1, to: "profile", name: "Профиль" },
    { id: 2, to: "friends", name: "Друзья" },
    { id: 3, to: "message", name: "Сообщения" },
    { id: 4, to: "group", name: "Группы" },
    { id: 5, to: "people", name: "Люди" },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;
