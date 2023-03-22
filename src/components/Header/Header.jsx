import c from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import AuthorInfo from '../Navigation/AuthorInfo/AuthorInfo';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuthProfile } from '../../redux/authReducer';

function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    dispatch(getAuthProfile());
  }, []);

  return (
    <header className={c.header}>
      <Logo />
      <Navigation />
      {isAuth ? <AuthorInfo /> : <div className={c.header__login}><NavLink to={'/login.'}>Login</NavLink></div>}
    </header>
  );
}

export default Header;
