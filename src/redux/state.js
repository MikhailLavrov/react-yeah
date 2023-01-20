let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hello Bob', likeCounter: 0},
      {id: 2, message: 'Hello Ashley?', likeCounter: 12},
      {id: 3, message: 'Hello Poop @', likeCounter: 2},
      {id: 3, message: 'Hello Poop @', likeCounter: 2},
    ],
  },
  
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Jenny', avaPath: 'https://backlightblog.com/images/2020/10/blur-photo-background-header.jpg'},
      {id: 2, name: 'Bob Sinclar', avaPath: 'https://www.pmindia.gov.in/wp-content/uploads/2022/12/Modi-Ji-Photo-02-e1647325936821.jpg'},
      {id: 3, name: 'Emma', avaPath: 'https://play-lh.googleusercontent.com/zg-BpJxDelX2-C6GxWOrdYwmrM8ekYwdHXNo4INck2C66kzDsJRhm3ggz6b-y7EWOQ'},
    ],

    messages: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How r u?'},
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
}

export default state;
