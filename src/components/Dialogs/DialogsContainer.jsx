import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {
  let state = props.store.getState();

  let onMessageChange = (text) => props.store.dispatch(updateMessageActionCreator(text));
  let addMessage = () => props.store.dispatch(addMessageActionCreator());

  return <Dialogs updateMessage={onMessageChange} addMessage={addMessage} 
                  dialogsPage={state.dialogsPage}
                  newMessageText={state.dialogsPage.newMessageText} />
};

export default DialogsContainer;
