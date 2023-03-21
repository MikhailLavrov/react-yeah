import c from './Post.module.css';

function Post(props) {
  return (
      <div className={c.post} key={props.key}>
        <img src={props.avatar} alt="ava" />
        {props.message}
        <span className={c.post__likecounter}>&#9825; {props.likeCounter}</span>
      </div>
  );
}

export default Post;
