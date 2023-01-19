import c from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
  return (
      <div className={c.myposts}>{props.text}
        <Post message='Hello Bob' likeCounter='0' />
        <Post message='Hello Ashley' likeCounter='12' />
        <Post message='Hello Poop' likeCounter='2' />
      </div>
  );
}

export default MyPosts;
