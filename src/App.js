import { Route, Routes } from 'react-router-dom';
import c from './App.module.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Dialogs from './components/Dialogs/Dialogs';
import Users from './components/Users/Users';
import LoginPage from './components/Login/Login';
import UserProfile from './components/Users/UserProfile/UserProfile';

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
