const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

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
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateMessageTextCreator = (text) => 
({ type: UPDATE_MESSAGE_TEXT, newMessage: text })

export default dialogsReducer;
