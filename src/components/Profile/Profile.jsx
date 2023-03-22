import c from './Profile.module.scss';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getStatus } from '../../redux/profileReducer';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const profilePage = useSelector((state) => state.profilePage);
  
  useEffect(() => {
    if (auth.id) {
      dispatch(getStatus(auth.id));
    }
  }, [auth.id, dispatch]);

  return (
    <div className={c.profile}>
      {!auth.isAuth 
        ? <Login /> 
        : <>
          <ProfileInfo 
            id={auth.id} 
            login={auth.login} 
            email={auth.email} 
            avatarImg={auth.avatarImg} 
            headerImg={auth.headerImg} 
            age={auth.age} 
            status={profilePage.status}
            />
          <MyPosts />
        </>}
    </div>
  );
}

export default Profile;
