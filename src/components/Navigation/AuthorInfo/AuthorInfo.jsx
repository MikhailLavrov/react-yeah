import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutThunk } from '../../../redux/authReducer';
import c from './AuthorInfo.module.scss';

const AuthorInfo = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickLogoutHandler = () => {
    console.log('logout');
    dispatch(logoutThunk())
    navigate(`/login`)
  }

  return (
    <div className={c.navigation__authorInfo} key={props.id} >
      <img width={50} height={50} src={props.avatarImg} alt="ava" />
      <span>{props.login}</span>
      <span>{props.email}</span>
      <button type='button'
              className={c.navigation__logout}
              title='Log out'
              onMouseUp={onClickLogoutHandler}></button>
    </div>
  );
};

export default AuthorInfo;
