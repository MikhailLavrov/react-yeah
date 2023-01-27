const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  dialogs: [
    {id: 1, name: 'Amelia Brand', avaPath: 'https://avatars.dzeninfra.ru/get-zen_doc/1894366/pub_5e3a24ccd86469218fd63d27_5e3f91fb10b5c24e9f79a081/scale_1200'},
    {id: 2, name: 'TARS', avaPath: 'https://w0.peakpx.com/wallpaper/545/464/HD-wallpaper-tars-ai-christopher-nolan-interstellar-nolan-robot.jpg'},
    {id: 3, name: 'Murphy Cooper', avaPath: 'https://i.pinimg.com/originals/cb/26/f8/cb26f8e51ee5679fe97791de3c6c5d89.png'},
    {id: 4, name: 'Dr. Mann', avaPath: 'https://www.looper.com/img/gallery/the-real-reason-matt-damons-interstellar-role-was-kept-a-secret/intro-1588026610.jpg'},
    {id: 5, name: 'Romilly', avaPath: 'https://pbs.twimg.com/media/DM8zhSvUQAAxOuY.jpg:large'},
  ],

  messages: [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How r u?'},
    {id: 3, message: 'Wow, really?'},
  ],

  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_MESSAGE:
      return { 
        ...state,
        messages: [...state.messages, { id: 0, message: state.newMessageText }],
        newMessageText: '',
      };
    
    case UPDATE_MESSAGE_TEXT: 
      return { 
        ...state,
        newMessageText: action.newMessage,
      };
    
    default: return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateMessageActionCreator = (text) => ({ type: UPDATE_MESSAGE_TEXT, newMessage: text });

export default dialogsReducer;
