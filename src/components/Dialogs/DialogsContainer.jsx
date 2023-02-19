import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => dispatch(updateMessageActionCreator(text)),
    addMessage: () => dispatch(addMessageActionCreator()),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithAuthRedirect(Dialogs));

export default DialogsContainer;
