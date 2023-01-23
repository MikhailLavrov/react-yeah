import c from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {
  let posts = props.posts.map(post => <Post message={post.message} likeCounter={post.likeCounter} avatar={props.authors[0]} />)

  let textareaElement = React.createRef();

  let addPost = () => {
    if (textareaElement.current.value !== '') {
      props.addPost();
    }
  }

  let onPostChange = () => {
    let text = textareaElement.current.value;
    props.updateNewPostText(text);
  }

  return (
      <div className={c.myposts}>
        <div className={c.myposts__addBlock}>
          <textarea name="post" value={props.newPostText} ref={textareaElement} onChange={onPostChange} cols="30" rows="10" placeholder='Write something here' />
          <button type='button' onClick={addPost}>Add post</button>
        </div>
        <div className={c.myposts__posts}>
          {posts}
        </div>
      </div>
  );
}

export default MyPosts;
