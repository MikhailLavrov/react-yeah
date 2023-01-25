const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  authors: [
    {
      name: 'Kotty Meowson', 
      age: 7, 
      bio: 'Meow bio', 
      avatarImg: 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg', 
      headerImg: 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'
    },
  ],

  posts: [
    {id: 1, message: 'Hello Bob', likeCounter: 0},
    {id: 2, message: 'Hello Ashley?', likeCounter: 12},
    {id: 3, message: 'Hello Poop @', likeCounter: 2},
  ],

  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 0,
        message: state.newPostText,
        likeCounter: 0,
      }
      state.posts.unshift(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default: return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostActionCreator = (text) => ({ type: UPDATE_POST_TEXT, newText: text });

export default profileReducer;
