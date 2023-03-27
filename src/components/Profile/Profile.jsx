import c from './Profile.module.scss';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useSelector } from 'react-redux';

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const followers = useSelector(state => state.dialogsPage.dialogs);

  return (
    <section className={c.profile}>
      <div className={`${c.profile__container} container`}>
        <ProfileInfo 
          id={auth.id} 
          login={auth.login}
          avatarImg={auth.avatarImg}
          followers={followers}
          />
        <MyPosts 
          login={auth.login}
          avatarImg={auth.avatarImg} 
          />
      </div>
    </section>
  );
}

export default Profile;
