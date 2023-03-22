import { useState } from 'react';
import { useSelector } from 'react-redux';
import c from './Post.module.scss';

const Post = ({id, message, likeCounter}) => {
  const avatar = useSelector((state) => state.auth.avatarImg);
  const [likes, setLikes] = useState(likeCounter);
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!liked);
  }

  return (
    <div className={c.post} key={id}>
      <img src={avatar} alt="ava" />
      {message}
      <button className={c.post__likecounter} 
              type='button' 
              onClick={handleLikeToggle}>
        {liked ? '❤️' : '🤍'} {likes}
      </button>
    </div>
  );
}

export default Post;
