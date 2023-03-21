import { Route, Routes } from 'react-router-dom';
import c from './App.module.scss';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Profile from '../Profile/Profile';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';
import Dialogs from '../Dialogs/Dialogs';
import Users from '../Users/Users';
import LoginPage from '../Login/Login';
import UserProfile from '../Users/UserProfile/UserProfile';

function App() {
  return (
    <div className={c.app}>
      <Header />
      <Navigation />
      <div className={c.app__content}>
        <Routes>
          <Route path="/*" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/dialogs/*" element={<Dialogs /> } />
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
