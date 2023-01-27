import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let posts = props.posts.map(post => <Post message={post.message} likeCounter={post.likeCounter} avatar={props.authors[0]} key={post.id} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    if (newPostElement.current.value !== '') {
      props.addPost();
    }
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePost(text);
  }

  return (
      <div className={c.myposts}>
        <div className={c.myposts__addBlock}>
          <textarea name="post" 
                    value={ props.newPostText } 
                    ref={ newPostElement } 
                    onChange={ onPostChange } 
                    cols="30" rows="10" 
                    placeholder='Write something here' 
                    />
          <button type='button' onClick={ onAddPost }>Add post</button>
        </div>
        <div className={c.myposts__posts}>
          {posts}
        </div>
      </div>
  );
}

export default MyPosts;
