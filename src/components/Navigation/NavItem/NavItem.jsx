import { NavLink } from 'react-router-dom';
import c from './NavItem.module.scss';

function NavItem({path, icon, name}) {
  return (
    <li className={c.navItem}>
      <NavLink to={path} className={navData => navData.isActive ? c.active : c.item}>
        <div className={c.navItem__icon}>
          <img src={icon} alt="nav icon" />
        </div>
        <span>{name}</span>
      </NavLink>
    </li>
  )
}

export default NavItem;
