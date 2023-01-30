import c from './Profile.module.css';
import MyPostsContainer from './MyPostsContainer/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileInfo authors={props.authors} profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
