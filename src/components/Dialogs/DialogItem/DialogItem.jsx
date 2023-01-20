import c from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  let path = '/dialogs/' + props.id;
  return (
    <li className={c.dialogs__item}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;
