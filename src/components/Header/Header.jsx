import c from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import AuthorInfo from '../Navigation/AuthorInfo/AuthorInfo';
import { NavLink } from 'react-router-dom';

function Header({authorized}) {
  return (
    <header className={c.header}>
      <Logo />
      <Navigation />
      {authorized 
        ? <AuthorInfo /> 
        : <div className={c.header__login}>
            <NavLink to={'/profile'}>Login</NavLink>
          </div>
      }
    </header>
  );
}

export default Header;
