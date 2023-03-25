import c from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import AuthorInfo from '../Navigation/AuthorInfo/AuthorInfo';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header({authorized}) {
  const [isOnTop, setIsOnTop] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      isTop !== isOnTop && setIsOnTop(isTop);
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isOnTop]);

  return (
    <header className={`${c.header} ${isOnTop ? c.onTop : c.onScroll}`}>
      <Logo />
      <Navigation />
      {authorized  
        ? <AuthorInfo /> 
        : <div className={c.header__login}>
            <Link to={'/profile'}>Login</Link>
          </div>
      }
    </header>
  );
}

export default Header;
