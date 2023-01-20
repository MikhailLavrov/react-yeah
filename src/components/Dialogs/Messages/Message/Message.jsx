import c from './Message.module.css';

function Message(props) {
  return (
    <li className={c.dialogs__message}>
      {props.message}
    </li>
  )
}

export default Message;
