import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import c from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPost, updatePost } from '../../../redux/profileReducer';

export const MyPosts = () => {
  const dispatch = useDispatch();
  const statePosts = useSelector((state) => state.profilePage.posts);
  const avatar = useSelector((state) => state.auth.avatarImg);
  const newPostText = useSelector((state) => state.profilePage.newPostText);

  let posts = statePosts.map(post => 
    <Post message={post.message} 
          likeCounter={post.likeCounter} 
          avatar={avatar} 
          key={post.id} 
          />)

  let newPostRef = useRef();

  let onSubmitHandle = () => {
    if (newPostRef.current.value !== '') {
      dispatch(addPost());
    }
  }

  let onPostChange = () => {
    let text = newPostRef.current.value;
    dispatch(updatePost(text));
  }

  return (
      <div className={c.myposts}>
        <div className={c.myposts__addBlock}>
          <form onSubmit={onSubmitHandle}>
            <textarea name="post" 
                      value={ newPostText } 
                      ref={ newPostRef } 
                      onChange={ onPostChange } 
                      cols="30" rows="10" 
                      placeholder='Write something here' 
                      />
            <button type='submit'>Add post</button>
          </form>
        </div>
        <div className={c.myposts__posts}>
          {posts}
        </div>
      </div>
  );
}
