import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div className={c.profile}>
      <ProfileInfo authors={props.profilePage.authors}/>
      <MyPosts dispatch={props.dispatch} 
               posts={props.profilePage.posts} 
               authors={props.profilePage.authors} 
               newPostText={props.profilePage.newPostText} />
    </div>
  );
}

export default Profile;
