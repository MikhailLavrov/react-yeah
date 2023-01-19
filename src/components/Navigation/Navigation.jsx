import { Link } from 'react-router-dom';
import c from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={c.navigation}>
      <ul>
        <li className={c.item}>
          <Link to='/profile' className='link'>Profile</Link>
        </li>
        <li className={c.item}>
          <Link to='/dialogs' className='link'>Messages</Link>
        </li>
        <li className={c.item}>
          <Link to='/news'>News</Link>
        </li>
        <li className={c.item}>
          <Link to='/music'>Music</Link>
        </li>
        <li className={c.item}>
          <Link to='/settings'>Settings</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
