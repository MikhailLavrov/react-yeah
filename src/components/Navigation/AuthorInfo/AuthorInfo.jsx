import c from './AuthorInfo.module.css';

const AuthorInfo = (props) => {
  return (
    <div className={c.navigation__authorInfo} key={props.id} >
      <img width={50} height={50} src={props.avatarImg} alt="ava" />
      <span>{props.login}</span>
      <span>{props.email}</span>
    </div>
  );
};
// const AuthorInfo = (props) => props.authors.map(author => {
//   return (
//     <div className={c.navigation__authorInfo} key={author.id} >
//       <img width={50} height={50} src={author.avatarImg} alt="ava" />
//       <span>{author.name}</span>
//     </div>
//   );
// });

export default AuthorInfo;
