import c from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import UsersPagination from './UsersPagination/UsersPagination';
import DEFAULT_AVATAR from '../../assets/default-avatar.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { follow, unfollow, getUsers } from '../../redux/usersReducer';

export const Users = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch();
  const usersPage = useSelector((state) => state.usersPage);
  const {users, pageSize, totalUsersCount, currentPage, isFetching, followingInProgress} = usersPage;

  useEffect(() => {
    dispatch(getUsers(currentPage, pageSize))
  }, [currentPage])

  return (
    <div className={c.users}>
      <h2>Users you may know</h2>
      
      <UsersPagination totalUsersCount={totalUsersCount} 
                       pageSize={pageSize}
                       currentPage={currentPage} />

      <ul className={c.users__list}>

        {isFetching 
          ? <Preloader />
          : users.map(user => 
            <li className={c.users__item} key={user.id}>
              <div className={c.users__avatar}>
                <img src={user.photos.small ? user.photos.small : DEFAULT_AVATAR} 
                     width={100} 
                     alt="avatar" />
                <NavLink to={'/users/' + user.id} 
                         className={c.users__profileLink}>View profile</NavLink>
              </div>
              {isAuth
              ? <div className={c.users__followButtonWrapper}>
                  {!user.followed 
                    ? <button className={c.users__followButton} 
                              disabled={followingInProgress.userId === user.id}
                              onClick={() => {
                                dispatch(follow(user.id));
                              }}>
                              Follow</button> 
                              
                    : <button className={c.users__followButton} 
                              disabled={followingInProgress.userId === user.id}
                              onClick={() => {
                                dispatch(unfollow(user.id))
                              }}>
                              Unfollow</button>
                    
                    }
                </div>
              : ''
              }

              <p className={c.users__nameWrapper}>
                <span>{user.name}</span>&nbsp;
                <span>{user.surname}</span>
              </p>
              <p className={c.users__status}>Status: <br/> <span>"{user.status}"</span></p>
            </li>)
        }

      </ul>
    </div>)
}

export default Users;
