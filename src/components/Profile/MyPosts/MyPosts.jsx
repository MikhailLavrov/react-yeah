import c from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
  {id: 1, message: 'Hello Bob', likeCounter: 0},
  {id: 1, message: 'Hello Ashley?', likeCounter: 12},
  {id: 1, message: 'Hello Poop @', likeCounter: 2},
]

let postsElements = posts.map(post => <Post message={post.message} likeCounter={post.likeCounter} />)

function MyPosts(props) {
  return (
      <div className={c.myposts}>
        <div className={c.myposts__addBlock}>
          <textarea name="" id="" cols="30" rows="10" placeholder='Write something here'></textarea>
          <button type='button'>Add post</button>
        </div>
        <div className={c.myposts__posts}>
          {postsElements}
        </div>
      </div>
  );
}

export default MyPosts;
