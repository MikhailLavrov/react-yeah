import { usersAPI } from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';
let SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
let SET_TOTAL_USERS_COUNT = 'SET-TOTAL-COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
let SET_USER_PROFILE = 'SET-USER-PROFILE';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  userProfile: null,
  followingInProgress: {
    isFetching: false,
    userId: null,
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        state: {...state},
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true};
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        state: {...state},
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false};
          }
          return user;
        }),
      };

    case SET_USERS: return { ...state, users: action.users };

    case SET_CURRENT_PAGE: return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT: return { ...state, totalUsersCount: action.count };

    case TOGGLE_IS_FETCHING: return { ...state, isFetching: action.isFetching };
    
    case SET_USER_PROFILE: return { ...state, userProfile: action.profile };

    case TOGGLE_IS_FOLLOWING_PROGRESS: return {  
      ...state, 
       followingInProgress: {
         ...state.followingInProgress,
         isFetching: action.isFetching,
         userId: action.userId,
       }
    }
    default: return state;
  }
};

//  Action creators
export const followSuccess = (userId) => ({ type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

//  Thunks
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
  
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage)); 

    usersAPI.getUsers(currentPage, pageSize)
    .then(data => { 
      dispatch(setCurrentPage(currentPage)); 
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}
export const follow = (userId) => {
  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.follow(userId)
    .then(data => { 
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, null))
    })
  }
}
export const unfollow = (userId) => {
  return (dispatch) => {

    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollow(userId)
    .then(data => { 
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
      dispatch(toggleFollowingProgress(false, null))
    })
  }
}

export default usersReducer;
