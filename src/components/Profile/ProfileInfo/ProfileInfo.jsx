import c from './ProfileInfo.module.scss';
import { ProfileStatus } from './ProfileStatus';

const ProfileInfo = (props) => {
  return (
    <div className={c.profileInfo} key={props.id} >
      <div className={c.profileInfo__header}>
        <img src={props.headerImg} alt='#'></img>
      </div>
      <div className={c.profileInfo__descriptionWrapper}>
        <div className={c.profileInfo__ava}>
          <img src={props.avatarImg} alt='#'></img>
        </div>
        <div className={c.profileInfo__description}>
          <h3>{props.login}</h3>
          <span>Age: {props.age}</span>
          <p>{props.email}</p>
          <div className={c.profileInfo__status}>
            Status: <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
