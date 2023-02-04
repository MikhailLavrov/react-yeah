import { NavLink } from 'react-router-dom';
import c from './NavItem.module.css';

function NavItem(props) {
  return (
    <li className={c.item} key={props.key}>
      <NavLink to={props.path} className = { navData => navData.isActive ? c.active : c.item } >{props.name}</NavLink>
    </li>
  )
}

export default NavItem;
