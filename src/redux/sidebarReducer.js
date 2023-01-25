let initialState = {
  navPoints: [
    {path: '/profile', name: 'Profile'},
    {path: '/dialogs', name: 'Messages'},
    {path: '/news', name: 'News'},
    {path: '/music', name: 'Music'},
    {path: '/settings', name: 'Settings'},
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
