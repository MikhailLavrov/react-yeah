import { useSelector } from 'react-redux';
import c from './Post.module.scss';

const Post = ({id, message, likeCounter}) => {
  const avatar = useSelector((state) => state.auth.avatarImg);

  return (
      <div className={c.post} key={id}>
        <img src={avatar} alt="ava" />
        {message}
        <span className={c.post__likecounter}>&#9825; {likeCounter}</span>
      </div>
  );
}

export default Post;
