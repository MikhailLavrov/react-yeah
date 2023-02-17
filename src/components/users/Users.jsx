import c from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import UsersPagination from './UsersPagination/UsersPagination';
import DEFAULT_AVATAR from '../../assets/default-avatar.jpg';
import { usersAPI } from '../../api/api';

let Users = (props) => {
  return (
    <div className={c.users}>
      <h2>Users you may know</h2>
      
      <UsersPagination totalUsersCount={props.totalUsersCount} 
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChange={props.onPageChange} />

      <ul className={c.users__list}>

        { 
        props.isFetching ? <Preloader /> :

        props.users.map(user => 
        <li className={c.users__item} key={user.id}>
          <div className={c.users__avatar}>
            <img src={user.photos.small ? user.photos.small : DEFAULT_AVATAR} width={100} alt="avatar" />
            <NavLink to={'/users/' + user.id} className={c.users__profileLink}>View profile</NavLink>
          </div>
          <div className={c.users__followButtonWrapper}>
            {!user.followed 

              ? <button className={c.users__followButton} 
                        disabled={props.followingInProgress.userId === user.id} 
                        onClick={() => { 
                          props.toggleFollowingProgress(true, user.id);
                          usersAPI.follow(user)
                          .then(data => { 
                            if (data.resultCode === 0) {
                              console.log(`Подписка на пользователя с id: ${user.id}`);
                              props.follow(user.id)
                            }
                            props.toggleFollowingProgress(false, null)
                          })
                        }}>Follow</button> 
                        
                        : <button className={c.users__followButton} 
                        disabled={props.followingInProgress.userId === user.id} 
                        onClick={() => {
                          props.toggleFollowingProgress(true, user.id);
                          usersAPI.unfollow(user)
                          .then(data => { 
                            if (data.resultCode === 0) {
                              console.log(`Отписка от пользователя с id: ${user.id}`);
                              props.unfollow(user.id)
                            }
                            props.toggleFollowingProgress(false, null)
                          })
                        }}>Unfollow</button>
              }
          </div>
          <p className={c.users__nameWrapper}>
            <span>{user.name}</span>&nbsp;
            <span>{user.surname}</span>
          </p>
          {/* <div className={c.users__locationWrapper}>
            <p>{"user.location.country"}</p>
            <p>{"user.location.city"}</p>
          </div> */}
          <p className={c.users__status}>Status: <br/> <span>"{user.status}"</span></p>
        </li>)
        }

      </ul>
    </div>)
}

export default Users;
