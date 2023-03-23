import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from '../../../redux/authReducer';
import c from './AuthorInfo.module.scss';

const AuthorInfo = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onClickLogoutHandler = () => {
    dispatch(logoutThunk())
  }

  return (
    <div className={c.author} key={auth.id} >
      <img className={c.author__avatar} width={50} height={50} src={auth.avatarImg} alt="ava" />
      <span className={c.author__name}>{auth.login}</span>
      {/* <span>{auth.email}</span> */}
      <button type='button'
              className={c.author__logoutButton}
              title='Log out'
              onMouseUp={onClickLogoutHandler}>&#x2715;</button>
    </div>
  );
};

export default AuthorInfo;
