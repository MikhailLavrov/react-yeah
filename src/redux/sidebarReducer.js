let initialState = {
  navPoints: [
    {id: '1', path: '/profile', name: 'Profile'},
    {id: '2', path: '/dialogs', name: 'Messages'},
    {id: '3', path: '/news', name: 'News'},
    {id: '4', path: '/music', name: 'Music'},
    {id: '5', path: '/settings', name: 'Settings'},
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
