import c from './Message.module.css';

function Message(props) {
  return (
    <li className={c.dialogs__message} key={props.id}>
      {props.message}
    </li>
  )
}

export default Message;
