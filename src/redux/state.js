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
      {id: 1, name: 'Jenny'},
      {id: 2, name: 'Bob Sinclar'},
      {id: 3, name: 'Emma'},
    ],

    messages: [
      {id: 1, message: 'Hello'},
      {id: 2, message: 'How r u?'},
      {id: 3, message: 'Wow, really?'},
    ],
  },
}

export default state;
