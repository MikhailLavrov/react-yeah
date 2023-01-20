import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message/Message';

let dialogs = [
  {id: 1, name: 'Jenny'},
  {id: 1, name: 'Bob Sinclar'},
  {id: 1, name: 'Emma'},
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 1, message: 'How r u?'},
  {id: 1, message: 'Wow, really?'},
]

let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

let messagesElements = messages.map(message => <Message message={message.message}/>)

function Dialogs(props) {
  return (
    <div className={c.dialogs}>
      <h2>Dialogs</h2>
      <ul className={c.dialogs__list}>
        {dialogsElements}
      </ul>
      <ul className={c.dialogs__messages}>
        {messagesElements}
      </ul>
    </div>
  )
}

export default Dialogs;
