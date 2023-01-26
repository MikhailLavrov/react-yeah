import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts/MyPosts';

function MyPostsContainer(props) {
  let state = props.store.getState();

  let onPostChange = (text) => props.store.dispatch(updatePostActionCreator(text));
  let addPost = () => props.store.dispatch(addPostActionCreator());

  return  <MyPosts updatePost={onPostChange} addPost={addPost} 
                   posts={state.profilePage.posts}
                   authors={state.profilePage.authors}
                   newPostText={state.profilePage.newPostText}/>;
}

export default MyPostsContainer;
