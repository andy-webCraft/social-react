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
      } else return state
    default:
      return state;
  }
};

export const addMessage = (newMessageText) => {
  return { type: ADD_MESSAGE, newMessageText: newMessageText };
};

export default messageReducer;
