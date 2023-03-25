import { useState } from 'react';
import { useDispatch } from 'react-redux';
import c from './Post.module.scss';
import { setLikeAC as putLikesToStore } from '../../../../redux/profileReducer';

const Post = ({ id, message, likeCounter, isLiked, login, avatarImg, currentDate }) => {
  const [likesCount, setLikesCount] = useState(likeCounter);
  const [liked, setLiked] = useState(isLiked);
  const dispatch = useDispatch();

  const handleLikeToggle = () => {
    dispatch(putLikesToStore(id, !liked))
    liked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1);
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
          {isLiked ? '❤️' : '🤍'} {likesCount}
        </button>
      </div>
    </div>
  );
}

export default Post;
