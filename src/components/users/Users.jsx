import React from "react";
import axios from "axios";
import c from './Users.module.css';

const DEFAULT_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg';

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
         .then(response => {
           this.props.setUsers(response.data.items)
         });
  }
  
  render() {
    return (
    <div className={c.users}>
      <h2>Users you may know</h2>
      <ul className={c.users__list}>

        {
        this.props.users.map(user => 
        <li className={c.users__item} key={user.id}>
          <div className={c.users__avatar}>
            <img src={user.photos.small != null ? user.photos.small : DEFAULT_AVATAR} width={100} alt="avatar" />
          </div>
          <div className={c.users__followButtonWrapper}>
            {!user.followed 
              ? <button onClick={() => { this.props.follow(user.id) }}>Follow</button> 
              : <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
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
}

export default Users;
