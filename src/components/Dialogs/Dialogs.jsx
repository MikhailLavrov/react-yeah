import c from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message/Message';
import React from 'react';

function Dialogs(props) {
  let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} surname={dialog.surname} avaPath={dialog.avaPath} key={dialog.id} />)
  let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} key={message.id}/>)

  let textareaElement = React.createRef();

  let onMessageChange = () => {
    let text = textareaElement.current.value;
    props.updateMessage(text);
  }

  let addMessage = () => {
    if (textareaElement.current.value !== '') {
      props.addMessage();
    }
    textareaElement.current.value = '';
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
        <textarea  ref={textareaElement} 
                   value={props.newMessageText}
                   onChange={ onMessageChange }
                   name="post" 
                   cols="30" rows="3" 
                   placeholder='Write something here' />
        <button type='button' onClick={ addMessage }>🚀</button>
      </div>
    </div>
  )
}

export default Dialogs;
