// const MESSAGE_TEXT = "MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    // case MESSAGE_TEXT:
    //   return { ...state, newMessageText: action.messageText };
    /* falls through */
    case ADD_MESSAGE:
      if (action.newMessageText) {
        return {
          ...state,
          messages: [
            ...state.messages,
            {
              id: state.messages.length + 1,
              sender: "out",
              text: action.newMessageText,
            },
          ],
        };
      }
    /* falls through */
    default:
      return state;
  }
};

// export const changeMessageActionCreator = (text) => {
//   return { type: MESSAGE_TEXT, messageText: text };
// };

export const addMessage = (newMessageText) => {
  return { type: ADD_MESSAGE, newMessageText: newMessageText };
};

export default messageReducer;
