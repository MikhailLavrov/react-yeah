import c from './Profile.module.scss';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { useSelector } from 'react-redux';

const Profile = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <section className={c.profile}>
      <div className={`${c.profile__container} container`}>
        <ProfileInfo 
          id={auth.id} 
          login={auth.login}
          avatarImg={auth.avatarImg}
          />
        <MyPosts />
      </div>
    </section>
  );
}

export default Profile;
