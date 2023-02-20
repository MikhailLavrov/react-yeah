import { authAPI } from "../api/api";
import DEFAULT_AVATAR from '../assets/default-avatar.jpg';
import DEFAULT_PROFILE_HEADER from '../assets/default-profile-header.jpg';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
  age: 34,
  avatarImg: DEFAULT_AVATAR,
  headerImg: DEFAULT_PROFILE_HEADER,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: return {
      ...state,
      ...action.data,
      isAuth: true,
    };
    default: return state;
  }
};

//  Action creators
export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} });

//  Thunks
export const getAuthProfile = () => {
  return (dispatch) => {
    authAPI.getAuth()
      .then(response => response.data)
      .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}

export default authReducer;
