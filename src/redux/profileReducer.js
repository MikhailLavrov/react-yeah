import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_STATUS = 'SET-STATUS';

let initialState = {
  posts: [
    {id: 1, message: 'Hello humans!', likeCounter: 0},
    {id: 2, message: 'Are u here?', likeCounter: 12},
    {id: 3, message: 'Does anybody hear me?', likeCounter: 2},
    {id: 4, message: 'Damn... 🥲', likeCounter: 2},
  ],
  newPostText: '',
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST: return {
      ...state,
      posts: [{ id: 0, message: state.newPostText, likeCounter: 0 }, ...state.posts],
      newPostText: '',
    };
    case SET_STATUS: return {
      ...state,
      status: action.status, 
    };
    case UPDATE_POST_TEXT: return {
      ...state, 
      newPostText: action.newText,
    };
    default: return state;
  }
};

// Action creators
export const addPost = () => ({ type: ADD_POST });
export const updatePost = (text) => ({ type: UPDATE_POST_TEXT, newText: text });
export const setStatus = (status) => ({ type: SET_STATUS, status });

// Thunks
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    })
  }
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }})
  }
};

export default profileReducer;
