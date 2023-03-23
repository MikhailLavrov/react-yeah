import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import c from './App.module.scss';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Music from '../Music/Music';
import News from '../News/News';
import Settings from '../Settings/Settings';
import Dialogs from '../Dialogs/Dialogs';
import Users from '../Users/Users';
import UserProfile from '../Users/UserProfile/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthProfile } from '../../redux/authReducer';
import Login from '../Login/Login';

const App = () => {
  const dispatch = useDispatch();
  const authorized = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    dispatch(getAuthProfile());
  }, [dispatch])

  return (
    <div className={c.app}>
      <Header authorized={authorized} />
      <div className={c.app__content}>
        <Routes>
          <Route path="/*" element={authorized ? <Profile /> : <Login />} />
          <Route path="/profile" element={authorized ? <Profile /> : <Login />} />
          <Route path="/dialogs/*" element={authorized ? <Dialogs /> : <Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users/:id" element={<UserProfile />} />
        </Routes>
      </div>
      <div></div>
    </div>
  );
}

export default App;
