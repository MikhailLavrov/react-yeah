import c from './ProfileInfo.module.scss';
import { ProfileStatus } from '../ProfileStatus/ProfileStatus';
import { FollowList } from '../FollowList/FollowList';

const ProfileInfo = ({id, login, avatarImg, followers}) => {
  return (
    <div className={c.profileInfo} key={id} >
      <div className={c.profileInfo__avatar}>
        <img width={200} src={avatarImg} alt='#'></img>
      </div>
      <div className={c.profileInfo__description}>
        <div className={c.profileInfo__bio}>
          <p className={c.profileInfo__name}>{login}</p>
          <ProfileStatus />
        </div>
        <div className={c.profileInfo__followers}>
          <span className={c.profileInfo__followersTitle}>{followers.length} followers</span>
          <FollowList followers={followers} />
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
