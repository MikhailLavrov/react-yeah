import c from './DialogItem.module.scss';
import { NavLink } from 'react-router-dom';

function DialogItem({id, name, surname, avaPath}) {
  let path = '/dialogs/' + id;
  return (
    <li className={c.dialogs__item} key={id}>
      <NavLink to={path} className={c.dialogs__link}>
        <img width={50} height={50} src={avaPath} alt="ava" />
        <p>
          <span>{name}</span>&nbsp;
          <span>{surname}</span>
        </p>
      </NavLink>
    </li>
  )
}

export default DialogItem;
