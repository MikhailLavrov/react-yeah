import { useState } from 'react';
import c from './Post.module.scss';

const Post = ({ id, message, likeCounter, login, avatarImg, currentDate }) => {
  const [likes, setLikes] = useState(likeCounter);
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    liked ? setLikes(likes - 1) : setLikes(likes + 1);
    setLiked(!liked);
  }

  return (
    <div className={c.post} key={id}>
      <div className={c.post__header}>
        <div className={c.post__headerImage}>
          <img src={avatarImg} width={50} alt="avatar" />
        </div>
        <div className={c.post__headerBio}>
          <p className={c.post__login}>{login}</p>
          <span className={c.post__date}>
            {currentDate}
          </span>
        </div>
      </div>
      <div className={c.post__body}>
        <p className={c.post__message}>{message}</p>
      </div>
      <div className={c.post__footer}>
        <button
          className={c.post__likeButton}
          type='button'
          onClick={handleLikeToggle}
        >
          {liked ? '❤️' : '🤍'} {likes}
        </button>
      </div>
    </div>
  );
}

export default Post;
