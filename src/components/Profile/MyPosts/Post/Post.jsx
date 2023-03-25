import { useState } from 'react';
import { useDispatch } from 'react-redux';
import c from './Post.module.scss';
import { setLikeAC as putLikesToStore, deletePostAC, editPostAC } from '../../../../redux/profileReducer';

const Post = ({ id, message, likeCounter, isLiked, login, avatarImg, currentDate }) => {
  const [likesCount, setLikesCount] = useState(likeCounter);
  const [liked, setLiked] = useState(isLiked);
  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const dispatch = useDispatch();

  const handleLikeToggle = () => {
    dispatch(putLikesToStore(id, !liked));
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    setLiked(!liked);
  };
  
  const postDeleteHandler = () => {
    dispatch(deletePostAC(id));
  };

  const postEditHandler = () => {
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    setEditedMessage(event.target.value);
  };

  const handleEditSubmit = () => {
    dispatch(editPostAC(id, editedMessage));
    setEditMode(false);
  };

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
        <div className={c.post__controls}>
          <button type='button' onClick={postEditHandler}>&#9998;</button>
          <button type='button' onClick={postDeleteHandler}>&#10005;</button>
        </div>
      </div>
      <div className={c.post__body}>
        {editMode ? (
          <textarea value={editedMessage} maxLength='200' onChange={handleInputChange} onBlur={handleEditSubmit} />
        ) : (
          <p className={c.post__message}>{message}</p>
        )}
      </div>
      <div className={c.post__footer}>
        {editMode ? (
          <button onClick={handleEditSubmit}>Save</button>
        ) : (
          <button
            className={c.post__likeButton}
            type='button'
            onClick={handleLikeToggle}
          >
            {isLiked ? '❤️' : '🤍'} {likesCount}
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
