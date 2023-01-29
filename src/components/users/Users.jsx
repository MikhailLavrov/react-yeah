import c from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';

const DEFAULT_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg';

let Users = (props) => {
  
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];

  // * Ограничил вывод кол-ва страниц пока
  for (let i = 1; i <= pagesCount && i <= 10; i++) {
    pages.push(i);
  }
  
  return (
    <div className={c.users}>
      <h2>Users you may know</h2>
      <div className={c.users__pagination}>

        {
        pages.map(page => { 
          return <span className={props.currentPage === page && c.users__selectedPage }
                       onClick={ () => {props.onPageChange(page)} }>{page}</span>
        })
        }

      </div>
      <ul className={c.users__list}>

        { 
        props.isFetching ? <Preloader /> :

        props.users.map(user => 
        <li className={c.users__item} key={user.id}>
          <div className={c.users__avatar}>
            <img src={user.photos.small ? user.photos.small : DEFAULT_AVATAR} width={100} alt="avatar" />
          </div>
          <div className={c.users__followButtonWrapper}>
            {!user.followed 
              ? <button onClick={() => { props.follow(user.id) }}>Follow</button> 
              : <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
            }
          </div>
          <p className={c.users__nameWrapper}>
            <span>{user.name}</span>&nbsp;
            <span>{user.surname}</span>
          </p>
          <div className={c.users__locationWrapper}>
            <p>{"user.location.country"}</p>
            <p>{"user.location.city"}</p>
          </div>
          <p className={c.users__status}>Status: <br/> <span>"{user.status}"</span></p>
        </li>)
        }

      </ul>
    </div>)
}

export default Users;
