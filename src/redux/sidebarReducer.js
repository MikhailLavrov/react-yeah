import profileIcon from '../assets/nav/profile.svg';
import dialogsIcon from '../assets/nav/dialogs.svg';
import newsIcon from '../assets/nav/news.svg';
import musicIcon from '../assets/nav/music.svg';
import settingsIcon from '../assets/nav/settings.svg';
import usersIcon from '../assets/nav/users.svg';

let initialState = {
  navPoints: [
    {id: 1, path: '/profile', name: 'Profile', icon: profileIcon},
    {id: 2, path: '/dialogs', name: 'Dialogs', icon: dialogsIcon},
    {id: 3, path: '/news', name: 'News', icon: newsIcon},
    {id: 4, path: '/music', name: 'Music', icon: musicIcon},
    {id: 5, path: '/settings', name: 'Settings', icon: settingsIcon},
    {id: 6, path: '/users', name: 'Users', icon: usersIcon},
  ]
};

const sidebarReducer = (state = initialState, action) => {
  return state;
};

export default sidebarReducer;
