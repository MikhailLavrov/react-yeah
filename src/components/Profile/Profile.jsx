import c from './Profile.module.css';
import MyPostsContainer from './MyPostsContainer/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileInfo authors={props.store.getState().profilePage.authors}/>
      <MyPostsContainer store={props.store} />
    </div>
  );
}

export default Profile;
