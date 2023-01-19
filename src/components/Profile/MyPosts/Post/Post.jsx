import c from './Post.module.css';

const IMG_URL = 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png';

function Post(props) {
  return (
      <div className={c.post}>
        <img src={IMG_URL} alt="ava" />
        {props.message}
        <span className={c.post__likecounter}>&#9825; {props.likeCounter}</span>
      </div>
  );
}

export default Post;
