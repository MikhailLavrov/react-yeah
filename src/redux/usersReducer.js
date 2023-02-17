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
      //  action.isFetching 
      //     ? [...state.followingInProgress, action.userId]
      //     : state.followingInProgress.filter(id => id !== action.userId)
    }
    default: return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId});
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export default usersReducer;
