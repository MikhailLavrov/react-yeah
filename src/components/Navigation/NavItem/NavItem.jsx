import { NavLink } from 'react-router-dom';
import c from './NavItem.module.scss';

function NavItem(props) {
  return (
    <li className={c.item}>
      <NavLink to={props.path} 
               className = { navData => navData.isActive 
                ? c.active 
                : c.item } 
                >
        {props.name}
      </NavLink>
    </li>
  )
}

export default NavItem;
