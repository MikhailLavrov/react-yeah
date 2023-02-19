import { Route, Routes } from 'react-router-dom';
import c from './App.module.css';
import Header from './components/Header/Header';
import NavigationContainer from './components/Navigation/NavigationContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import UserProfileContainer from './components/Users/UserProfile/UserProfileContainer';
import LoginPage from './components/login/Login';

function App(props) {
  return (
    <div className={c.app}>
      <Header />
      <NavigationContainer />
      <div className={c.app__content}>
        <Routes>
          <Route path="/*" element={ <ProfileContainer /> } />
          <Route path="/dialogs/*" element={ <DialogsContainer /> } />
          <Route path="/music" element={<Music/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/users/:id" element={<UserProfileContainer />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
