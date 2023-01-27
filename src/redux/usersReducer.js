let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initialState = {
  users: [
    // {
    //   id: '1',
    //   followed: false,
    //   name: 'Kelly', 
    //   surname: 'C.',
    //   status: 'Fine',
    //   location: {
    //     country: 'UK', 
    //     city: 'Manchester',  
    //   },
    //   avatarImg: 'https://kellypreston.com/wp-content/uploads/2018/04/KP-Home-1-1-1040x800.jpg',
    // },
    // {
    //   id: '2', 
    //   followed: true,
    //   name: 'Antonio', 
    //   surname: 'B.', 
    //   status: 'Hmm',
    //   location: {
    //     country: 'Canada', 
    //     city: 'Montreal',  
    //   },
    //   avatarImg: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/marco-di-antonio_1656067608330_x2.jpg?r=7241',
    // },
    // {
    //   id: '3', 
    //   followed: false,
    //   name: 'Makoto', 
    //   surname: 'J.', 
    //   status: 'I am ok',
    //   location: {
    //     country: 'Japan', 
    //     city: 'Tokio',  
    //   },
    //   avatarImg: 'https://womenandtravel.net/wp-content/uploads/2021/06/Minami-Hamabe.jpg',
    // },
  ],
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

    case SET_USERS:
      return { ...state, users: action.users };
    
    default: return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId});
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
