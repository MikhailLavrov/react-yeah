import c from './Profile.module.css';
import MyPostsContainer from './MyPostsContainer/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileInfo login={props.author.login} id={props.author.id} email={props.author.email} avatarImg={props.author.avatarImg} headerImg={props.author.headerImg} age={props.author.age} status={props.status} updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
