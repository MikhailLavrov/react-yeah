import { NavLink } from 'react-router-dom';
import c from './NavItem.module.scss';

function NavItem(props) {
  return (
    <li className={c.navItem}>
      <NavLink to={props.path} className = { navData => navData.isActive ? c.active : c.item }>
        <div className={c.navItem__icon}>
          <img src={props.icon} alt="nav icon" />
        </div>
        <span>{props.name}</span>
      </NavLink>
    </li>
  )
}

export default NavItem;
