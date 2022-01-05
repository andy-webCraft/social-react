import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    Header: {},
    SideBar: {
      navData: [
        { id: 1, to: "profile", name: "Профиль" },
        { id: 2, to: "friends", name: "Друзья" },
        { id: 3, to: "message", name: "Сообщения" },
        { id: 4, to: "group", name: "Группы" },
      ],
    },
    ProfilePage: {
      userData: {
        name: "Damilola",
        age: "30",
        avatar:
          "https://i.pinimg.com/474x/38/07/45/3807452de810352bca9c0587863ebece--avatar-film-nerd.jpg",
        sex: "Male",
        country: "Russia",
        sity: "Moscow",
        hobby: "Cars, IT, Music, Films",
        registration: "25.11.2021",
      },
      Posts: [
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
      NewPostText: "",
    },
    FriendsPage: {
      friends: [
        {
          id: 1,
          name: "Diego",
          avatar:
            "https://www.ioschattanooga.com/wp-content/uploads/2021/06/Why-do-I-need-a-bone-graft-2.jpg",
          status: "Online",
        },
        {
          id: 2,
          name: "Macho",
          avatar:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/256px-Outdoors-man-portrait_%28cropped%29.jpg",
          status: "Offline",
        },
        {
          id: 3,
          name: "George",
          avatar:
            "https://10.img.avito.st/avatar/social/256x256/5499302110.jpg",
          status: "Online",
        },
        {
          id: 4,
          name: "Masha",
          avatar:
            "https://avatars.mds.yandex.net/get-pdb/2797093/74e01051-6112-4f3e-8a3c-f19c5275115b/s1200?webp=false",
          status: "Offline",
        },
        {
          id: 5,
          name: "Olga",
          avatar:
            "https://blog.eva.ua/wp-content/uploads/2021/01/4-Osen-1024x768.jpg",
          status: "Offline",
        },
        {
          id: 6,
          name: "Jessica",
          avatar:
            "https://phinemo.com/wp-content/uploads/2017/04/wanita-cantik28-320x200.jpg",
          status: "Online",
        },
        {
          id: 7,
          name: "Rose",
          avatar: "https://i.ytimg.com/vi/ejInryrF5Ns/hqdefault.jpg",
          status: "Online",
        },
        {
          id: 8,
          name: "Galia",
          avatar: "https://volkovysk.by/uploaded/thumbnails/5f087c79f4030.jpg",
          status: "Offline",
        },
      ],
    },
    MessagePage: {
      messages: [
        {
          id: 1,
          sender: "in",
          text: "Hello, bro",
        },
        {
          id: 2,
          sender: "out",
          text: "Hey",
        },
        {
          id: 3,
          sender: "in",
          text: "How are you today?",
        },
        {
          id: 4,
          sender: "out",
          text: "I'm fine, bro, all is good",
        },
        {
          id: 5,
          sender: "out",
          text: "How are you too?",
        },
      ],
      newMessageText: "",
    },
    GroupPage: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {},
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dicpatch(action) {
      this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
      this._state.MessagePage = messageReducer(this._state.MessagePage, action)

      this._callSubscriber(this._state)
  },
};

export default store;
