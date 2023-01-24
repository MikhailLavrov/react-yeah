let store = {

  _state: {
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

      newMessageText: '',
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
  },

  _callSubscriber() {
    console.log('State has changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {

      case 'ADD-POST':
        let newPost = {
          id: 0,
          message: this._state.profilePage.newPostText,
          likeCounter: 0,
        };
      
        this._state.profilePage.posts.unshift(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = '';
        break;

      case 'UPDATE-NEW-POST-TEXT':
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;

      case 'ADD-MESSAGE':
        let newMessage = {
          id: 0, 
          message: this._state.dialogsPage.newMessageText,
        }
      
        this._state.dialogsPage.messages.push(newMessage);
        this._callSubscriber(this._state);
        this._state.dialogsPage.newMessageText = '';
        break;

      case 'UPDATE-NEW-MESSAGE-TEXT':
        this._state.dialogsPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
        break;
    
      default:
        break;
    }
    // if (action.type === 'ADD-POST') {
    //   let newPost = {
    //     id: 0,
    //     message: this._state.profilePage.newPostText,
    //     likeCounter: 0,
    //   };
    
    //   this._state.profilePage.posts.unshift(newPost);
    //   this._callSubscriber(this._state);
    //   this._state.profilePage.newPostText = '';
    // } 

    // else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);
    // } 
    
    // else if (action.type === 'ADD-MESSAGE') {
    //   let newMessage = {
    //     id: 0, 
    //     message: this._state.dialogsPage.newMessageText,
    //   }
    
    //   this._state.dialogsPage.messages.push(newMessage);
    //   this._callSubscriber(this._state);
    //   this._state.dialogsPage.newMessageText = '';
    // }

    // else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
    //   this._state.dialogsPage.newMessageText = action.newMessage;
    //   this._callSubscriber(this._state);
    // }
  },
}

export default store;
