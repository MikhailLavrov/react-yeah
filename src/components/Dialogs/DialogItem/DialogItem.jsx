import c from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem(props) {
  let path = '/dialogs/' + props.id;
  return (
    <li className={c.dialogs__item} key={props.key}>
      <NavLink to={path} className={c.dialogs__link}>
        <img width={50} height={50} src={props.avaPath} alt="ava" />
        <p>
          <span>{props.name}</span>&nbsp;
          <span>{props.surname}</span>
        </p>
      </NavLink>
    </li>
  )
}

export default DialogItem;
