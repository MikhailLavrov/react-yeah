import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }

    default: return state;
  }
};

//  Action creators
export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: {id, login, email} });

//  Thunks
export const getAuthProfile = () => {
  return (dispatch) => {
    authAPI.getAuth()
      .then(data => { 
      if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, login, email))
      }
    })
  }
}

export default authReducer;
