import c from './Message.module.scss';

function Message({id, message}) {
  return (
    <li className={c.dialogs__message} key={id}>
      {message}
    </li>
  )
}

export default Message;
