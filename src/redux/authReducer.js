import { authAPI } from "../api/api";
import { securityAPI } from "../api/api";
import DEFAULT_AVATAR from '../assets/default-avatar.jpg';

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA = 'SET-CAPTCHA';
const INIT_SUCCESS = 'INIT-SUCCESS';

let initialState = {
  initialized: false,
  id: null,
  login: null,
  email: null,
  isAuth: false,
  avatarImg: DEFAULT_AVATAR,
  captchaUrl: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: return {
      ...state,
      ...action.payload,
    };
    case SET_CAPTCHA: return {
      ...state,
      captchaUrl: action.payload.captchaUrl,
    };
    case INIT_SUCCESS: return {
      ...state,
      initialized: true,
    }
    default: return state;
  }
};

//  Action creators
export const setAuthUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, payload: {id, login, email, isAuth} });
export const setCaptchaURL = (captchaUrl) => ({ type: SET_CAPTCHA, payload: {captchaUrl} });
export const initSuccess = () => ({type: INIT_SUCCESS})

//  Thunks
export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthProfile());
    Promise.all([promise])
      .then(() => dispatch(initSuccess()));
  }
}

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

export const loginThunk = (email, password, rememberMe, captcha, setStatus) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
      .then(response => response.data)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthProfile())
        } else {
          setStatus(data.messages)
        }

        if (data.resultCode === 10) {
          dispatch(getCaptcha())
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

export const getCaptcha = () => {
  return (dispatch) => {
    securityAPI.getCaptcha()
    .then(response => {
      console.log(response);
      dispatch(setCaptchaURL(response.data.url));
    })
  }
}

export default authReducer;
