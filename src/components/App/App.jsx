import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import c from './App.module.scss';
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
import Layout from '../Layout/Layout';

const App = () => {
  const dispatch = useDispatch();
  const authorized = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    dispatch(getAuthProfile());
  }, [dispatch])

  return (
    <div className={c.app}>
        <Routes>
          <Route path="/" element={<Layout authorized={authorized} /> }>
            <Route index element={authorized ? <Profile /> : <Login />} />
            <Route path="profile" element={authorized ? <Profile /> : <Login />} />
            <Route path="dialogs/*" element={authorized ? <Dialogs /> : <Login />} />
            <Route path="news" element={<News />} />
            <Route path="music" element={<Music />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users/:id" element={<UserProfile />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
