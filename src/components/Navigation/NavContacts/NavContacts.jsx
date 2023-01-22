import c from './NavContacts.module.css';
import DialogItem from '../../Dialogs/DialogItem/DialogItem';

function NavContacts(props) {
  let dialogsElements = props.dialogs.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avaPath={dialog.avaPath} />)

  return (
    <div className={c.navigation__contacts}>
      <h3 className={c.navigation__contactsHeader}>My contacts</h3>
      <ul className={c.navigation__contactsList}>
        {dialogsElements}
      </ul>
    </div>
  );
}

export default NavContacts;
