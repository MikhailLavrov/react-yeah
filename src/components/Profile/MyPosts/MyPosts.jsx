import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  let posts = props.posts.map(post => <Post message={post.message} likeCounter={post.likeCounter} avatar={props.authors[0]} />)

  return (
      <div className={c.myposts}>
        <div className={c.myposts__addBlock}>
          <textarea name="" id="" cols="30" rows="10" placeholder='Write something here'></textarea>
          <button type='button'>Add post</button>
        </div>
        <div className={c.myposts__posts}>
          {posts}
        </div>
      </div>
  );
}

export default MyPosts;
