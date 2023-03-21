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
      ...action.payload,
    };
    default: return state;
  }
};

//  Action creators
export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: {id, login, email, isAuth} });

//  Thunks
export const getAuthProfile = () => {
  return (dispatch) => {
    authAPI.getAuth()
      .then(response => response.data)
      .then(data => {
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email, true));
      }
    })
  }
}

export const loginThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe)
      .then(response => response.data)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthProfile())
        }
      })
  }
}

export const logoutThunk = () => {
  return (dispatch) => {
    authAPI.logout()
      .then(dispatch(setAuthUserData(null, null, null, false)));
  }
}

export default authReducer;
