import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import c from './MyPosts.module.scss';
import Post from './Post/Post';
import { addPost } from '../../../redux/profileReducer';

export const MyPosts = () => {
  const [postText, setPostText] = useState('');
  let randomNum = new Date().getTime() % 9000 + 1000;

  const dispatch = useDispatch();
  const statePosts = useSelector((state) => state.profilePage.posts);

  let posts = statePosts.map(post => 
    <Post message={post.message} 
          likeCounter={post.likeCounter}
          id={post.id} 
          />)

          console.log(statePosts[0]);
  let onSubmitHandle = (e) => {
    e.preventDefault();

    if (postText.trim() !== '') {
      dispatch(addPost(randomNum, postText));
    }
    setPostText('');
  }

  let onPostChange = (e) => {
    const text = e.target.value;
    setPostText((text));
  }

  return (
      <div className={c.myposts}>
        <div className={c.myposts__addBlock}>
          <form onSubmit={onSubmitHandle}>
            <textarea name="post" 
                      value={postText} 
                      onChange={onPostChange} 
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
