import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    {
    id: 1,
    message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aspernatur repellendus vero incidunt accusantium aperiam, nihil, odit eveniet amet autem commodi ipsam inventore dicta quae reiciendis sint eum perferendis!',
    likeCounter: 0,
    currentDate: '17.03.2023, 10:52:20',
    },
    {
      id: 2,
      message: 'Hello humans!',
      likeCounter: 0,
      currentDate: '10.03.2023, 16:32:10',
    },
    {
      id: 3,
      message: 'Are u here?',
      likeCounter: 12,
      currentDate: '06.03.2023, 07:12:22',
    },
    {
      id: 4,
      message: 'Does anybody hear me?',
      likeCounter: 2,
      currentDate: '02.03.2023, 02:31:19',
    },
    {
      id: 5,
      message: 'Damn... 🥲',
      likeCounter: 2,
      currentDate: '15.02.2023, 12:11:17',
    },
  ],
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
      id: state.posts.length + 1,
      message: action.payload.message,
      likeCounter: 0,
      currentDate: action.payload.currentDate,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
  };
    default:
      return state;
  }
};

// Action creators
export const addPost = (message, currentDate) => ({
  type: ADD_POST,
  payload: { message, currentDate },
});

export const setStatus = (status) => ({ type: SET_STATUS, status });

// Thunks
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data))
    })
  }
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      response.data.resultCode === 0 && dispatch(setStatus(status))
    })
  }
};

export default profileReducer;