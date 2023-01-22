import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message/Message';
import React from 'react';

function Dialogs(props) {
  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} avaPath={dialog.avaPath} />)
  let messagesElements = props.state.messages.map(message => <Message message={message.message}/>)

  let newMessage = React.createRef();

  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  return (
    <div className={c.dialogs}>
      <h2 className={c.dialogs__header}>Dialogs</h2>
      <div className={c.dialogs__innerWrapper}>
        <ul className={c.dialogs__contactsList}>
          {dialogsElements}
        </ul>
        <ul className={c.dialogs__messagesList}>
          {messagesElements}
        </ul>
      </div>
      <div className={c.dialogs__addBlock}>
        <textarea  ref={newMessage} name="post" cols="30" rows="3" placeholder='Write something here'></textarea>
        <button type='button' onClick={addMessage}>🚀</button>
      </div>
    </div>
  )
}

export default Dialogs;
