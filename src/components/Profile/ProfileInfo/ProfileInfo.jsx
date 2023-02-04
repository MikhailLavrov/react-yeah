import c from './ProfileInfo.module.css';

function ProfileInfo(props) {
  let newProfile = props.authors.map(author => {
    return (
      <div className={c.profileInfo} key={author.id} >
        <div className={c.profileInfo__header}>
          <img src={author.headerImg} alt='#'></img>
        </div>
        <div className={c.profileInfo__descriptionWrapper}>
          <div className={c.profileInfo__ava}>
            <img src={author.avatarImg} alt='#'></img>
          </div>
          <div className={c.profileInfo__description}>
            <h3>{author.name}</h3>
            <span>Age: {author.age}</span>
            <p>{author.bio}</p>
          </div>
        </div>
      </div>
    )});
    
  return (
    <>
      {newProfile}
    </>
  );
}

export default ProfileInfo;
