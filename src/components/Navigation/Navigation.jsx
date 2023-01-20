import { NavLink } from 'react-router-dom';
import c from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={c.navigation}>
      <ul>
        <li className={c.item}>
          <NavLink to='/profile' className = { navData => navData.isActive ? c.active : c.item }>Profile</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/dialogs' className = { navData => navData.isActive ? c.active : c.item }>Messages</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/news' className = { navData => navData.isActive ? c.active : c.item }>News</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/music' className = { navData => navData.isActive ? c.active : c.item }>Music</NavLink>
        </li>
        <li className={c.item}>
          <NavLink to='/settings' className = { navData => navData.isActive ? c.active : c.item }>Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
