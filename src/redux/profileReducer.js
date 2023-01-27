const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  authors: [
    {
      id: '1', 
      name: 'Joseph Cooper', 
      age: 35, 
      bio: 'We have always defined ourselves by the ability to overcome the impossible. And we count these moments. These moments when we dare to aim higher, to break barriers, to reach for the stars, to make the unknown known. We count these moments as our proudest achievements.', 
      avatarImg: 'https://i.ytimg.com/vi/6z1q8SpsriY/maxresdefault.jpg',
      headerImg: 'https://p4.wallpaperbetter.com/wallpaper/42/988/852/interstellar-movie-endurance-hd-wallpaper-preview.jpg',
    },
  ],

  posts: [
    {id: 1, message: 'Hello humans!', likeCounter: 0},
    {id: 2, message: 'Are u here?', likeCounter: 12},
    {id: 3, message: 'Does anybody hear me?', likeCounter: 2},
    {id: 4, message: 'Damn... 🥲', likeCounter: 2},
  ],

  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_POST: 
      return {
        ...state,
        posts: [{ id: 0, message: state.newPostText, likeCounter: 0 }, ...state.posts],
        newPostText: '',
      }

    case UPDATE_POST_TEXT: 
      return {
        ...state,
        newPostText: action.newText,
      }

    default: return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });

export default profileReducer;
