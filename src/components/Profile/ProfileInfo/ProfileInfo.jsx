import c from './ProfileInfo.module.scss';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  return (
    <div className={c.profileInfo} key={props.id} >
      <div className={c.profileInfo__avatar}>
        <img width={200} src={props.avatarImg} alt='#'></img>
      </div>
      <div className={c.profileInfo__description}>
        <p className={c.profileInfo__name}>{props.login}</p>
        <ProfileStatus />
      </div>
    </div>
  );
}

export default ProfileInfo;
