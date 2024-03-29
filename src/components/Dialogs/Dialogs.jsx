import c from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageAC } from '../../redux/dialogsReducer';

const Dialogs = () => {
  const dispatch = useDispatch();
  const dialogsPage = useSelector((state) => state.dialogsPage);
  const [newMessageText, setNewMessageText] = useState('');

  let dialogsElements = dialogsPage.dialogs.map(dialog =>
    <DialogItem name={dialog.name} 
                surname={dialog.surname} 
                avaPath={dialog.avaPath} 
                key={dialog.id} />)

  let messagesElements = dialogsPage.messages.map(message => 
    <Message message={message.message} 
             key={message.id}/>)

  const onMessageChange = (event) => {
    setNewMessageText(event.target.value);
  }

  const onSubmitHandle = () => {
    if (newMessageText !== '') {
      dispatch(addMessageAC(newMessageText));
      setNewMessageText('');
    }
  }

  return (
      <section className={c.dialogs}>
        <h2 className={c.dialogs__header}>Dialogs</h2>
        <div className={c.dialogs__innerWrapper}>
          <ul className={c.dialogs__contactsList}>
            {dialogsElements}
          </ul>
          <ul className={c.dialogs__messagesList}>
            {messagesElements}
          </ul>
        </div>
        <div>
          <div className={c.dialogs__addBlock}>
            <form onSubmit={onSubmitHandle}>
              <textarea 
                value={newMessageText}
                onChange={onMessageChange}
                name="post" 
                cols="30" 
                rows="3" 
                placeholder='Write something here' 
                />
              <button type='submit'>🚀</button>
            </form>
          </div>
        </div>
      </section>)
}

export default Dialogs;
