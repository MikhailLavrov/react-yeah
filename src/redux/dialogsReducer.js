const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Jenny', avaPath: 'https://backlightblog.com/images/2020/10/blur-photo-background-header.jpg'},
    {id: 2, name: 'Bob Sinclar', avaPath: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Modi-Ji-Photo-02-e1647325936821.jpg'},
    {id: 3, name: 'Emma', avaPath: 'https://static.nexilia.it/biccy/2022/04/Ava-Max-Maybe-You-re-The-Problem.jpg'},
  ],

  messages: [
    {id: 2, message: 'How r u?'},
    {id: 1, message: 'Hello'},
    {id: 3, message: 'Wow, really?'},
  ],

  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 0, 
        message: state.newMessageText,
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
  
    default: return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;
