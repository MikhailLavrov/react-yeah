import c from './Profile.module.css';
import MyPostsContainer from './MyPostsContainer/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthProfile } from '../../redux/authReducer';

const Profile = () => {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.auth);
  const status = useSelector((state) => state.profilePage.status);

  useEffect(() => {
    dispatch(getAuthProfile());
    // props.getStatus(27693);
  }, []);

  console.log('Profile FC render');
  return (
    <div className={c.profile}>
      {!author.isAuth 
      ? <Login /> 
      : <>
        <ProfileInfo 
          id={author.id} 
          login={author.login} 
          email={author.email} 
          avatarImg={author.avatarImg} 
          headerImg={author.headerImg} 
          age={author.age} 
          status={status} 
          // updateStatus={props.updateStatus} 
          />
        <MyPostsContainer />
        </>}
    </div>
  );
}

export default Profile;
