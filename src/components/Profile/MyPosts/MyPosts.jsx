import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
      <div className={c.myposts}>
        My posts
        <div>New post</div>
        <div>
          <Post />
          <Post />
        </div>
      </div>
  );
}

export default MyPosts;
