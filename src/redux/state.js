let reRender = () => {
  console.log('State has changed');
};

let state = {
  profilePage: {
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
  },
  
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Jenny', avaPath: 'https://backlightblog.com/images/2020/10/blur-photo-background-header.jpg'},
      {id: 2, name: 'Bob Sinclar', avaPath: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Modi-Ji-Photo-02-e1647325936821.jpg'},
      {id: 3, name: 'Emma', avaPath: 'https://static.nexilia.it/biccy/2022/04/Ava-Max-Maybe-You-re-The-Problem.jpg'},
    ],

    messages: [
      {id: 2, message: 'How r u?'},
      {id: 1, message: 'Hello'},
      {id: 3, message: 'Wow, really?'},
    ],
  },

  sidebar: {
    navPoints: [
      {path: '/profile', name: 'Profile'},
      {path: '/dialogs', name: 'Messages'},
      {path: '/news', name: 'News'},
      {path: '/music', name: 'Music'},
      {path: '/settings', name: 'Settings'},
    ]
  }
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCounter: 0,
  };

  state.profilePage.posts.unshift(newPost);
  reRender();
  state.profilePage.newPostText = '';
};

export const addMessage = (message) => {
  let newMessage = {
    id: 4, 
    message: message,
  }

  state.dialogsPage.messages.push(newMessage);
  reRender();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reRender();
};

export const subscribe = (observer) => {
  reRender = observer;
};

export default state;
