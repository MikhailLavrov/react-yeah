import { Fragment } from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo(props) {
  let newProfile = props.state.profilePage.authors.map(author => {
    return (
      <Fragment key={author.id} >
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
      </Fragment>
    )});
    
  return (
    <div className={c.profileInfo}>
      {newProfile}
    </div>
  );
}

export default ProfileInfo;
