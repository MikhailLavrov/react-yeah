import { Fragment } from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo(props) {
  let state = props.store.getState();

  let newProfile = state.profilePage.authors.map(author => {
    return (
      <Fragment>
        <img src={author.headerImg} alt='#'></img>
        <div className={c.profileInfo__description}>
          <div className={c.profileInfo__ava}>
            <img src={author.avatarImg} alt='#'></img>
          </div>
          <div>
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
