import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message/Message';

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avaPath={dialog.avaPath} />)
  let messagesElements = props.state.messages.map(message => <Message message={message.message}/>)

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
