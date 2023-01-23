import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileInfo authors={props.profilePage.authors}/>
      <MyPosts posts={props.profilePage.posts} authors={props.profilePage.authors} addPost={props.addPost} newPostText={props.profilePage.newPostText} updateNewPostText={props.updateNewPostText} />
    </div>
  );
}

export default Profile;
