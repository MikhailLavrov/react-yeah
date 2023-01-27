import c from './AuthorInfo.module.css';

const AuthorInfo = (props) => props.authors.map(author => {
  return (
    <div className={c.navigation__authorInfo} key={author.id} >
      <img width={50} height={50} src={author.avatarImg} alt="ava" />
      <span>{author.name}</span>
    </div>
  );
});

export default AuthorInfo;
