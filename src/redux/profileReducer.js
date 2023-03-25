import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_STATUS = 'SET-STATUS';
const SET_LIKE = 'SET-LIKE';

let initialState = {
  posts: [
    {
      id: 1,
      message: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam aspernatur repellendus vero incidunt accusantium aperiam, nihil, odit eveniet amet autem commodi ipsam inventore dicta quae reiciendis sint eum perferendis!',
      currentDate: '17.03.2023, 10:52:20',
      likeCounter: 0,
      isLiked: false,
    },
    {
      id: 2,
      message: 'Hello humans!',
      currentDate: '10.03.2023, 16:32:10',
      likeCounter: 1,
      isLiked: true,
    },
    {
      id: 3,
      message: 'Are u here?',
      currentDate: '06.03.2023, 07:12:22',
      likeCounter: 12,
      isLiked: true,
    },
    {
      id: 4,
      message: 'Does anybody hear me?',
      currentDate: '02.03.2023, 02:31:19',
      likeCounter: 2,
      isLiked: false,
    },
    {
      id: 5,
      message: 'Damn... 🥲',
      currentDate: '15.02.2023, 12:11:17',
      likeCounter: 1,
      isLiked: true,
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
    
    case SET_LIKE:
    const { id, like } = action.payload;
    console.log(action.payload);
    const updatedPosts = state.posts.map(post => {
      if (post.id === id) {
        return {
          ...post,
          likeCounter: like ? post.likeCounter + 1 : post.likeCounter - 1,
          isLiked: like,
        };
      }
      return post;
    });
    return {
      ...state,
      posts: updatedPosts,
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

export const setLikeAC = (id, like) => ({type: SET_LIKE, payload: { id, like }}) 

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