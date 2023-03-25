import c from './ProfileInfo.module.scss';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';

const ProfileInfo = ({id, login, avatarImg}) => {
  return (
    <div className={c.profileInfo} key={id} >
      <div className={c.profileInfo__avatar}>
        <img width={200} src={avatarImg} alt='#'></img>
      </div>
      <div className={c.profileInfo__description}>
        <p className={c.profileInfo__name}>{login}</p>
        <ProfileStatus />
      </div>
    </div>
  );
}

export default ProfileInfo;
