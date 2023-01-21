import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileInfo authors={props.state.authors}/>
      <MyPosts posts={props.state.posts} authors={props.state.authors} />
    </div>
  );
}

export default Profile;
