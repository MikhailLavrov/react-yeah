import c from './Profile.module.scss';
import { MyPosts } from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthProfile } from '../../redux/authReducer';
import { getStatus } from '../../redux/profileReducer';

const Profile = () => {
  const dispatch = useDispatch();
  const author = useSelector((state) => state.auth);
  const status = useSelector((state) => state.profilePage.status);
console.log(author.id);
  useEffect(() => {
    dispatch(getAuthProfile());
    if (author.id) {
      dispatch(getStatus(author.id));
    }
  }, [author.id]);

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
            />
          <MyPosts />
        </>}
    </div>
  );
}

export default Profile;
