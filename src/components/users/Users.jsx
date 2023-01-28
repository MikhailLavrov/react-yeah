import axios from 'axios';
import c from './Users.module.css'

let DEFAULT_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg';

let Users = (props) => {

  let getUsers = () => {
    if (props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => props.setUsers(response.data.items))
    }
    // props.setUsers(
    //   [
    //     {
    //       id: '1',
    //       followed: false,
    //       name: 'Kelly', 
    //       surname: 'C.',
    //       status: 'Fine',
    //       location: {
    //         country: 'UK', 
    //         city: 'Manchester',  
    //       },
    //       avatarImg: 'https://kellypreston.com/wp-content/uploads/2018/04/KP-Home-1-1-1040x800.jpg',
    //     },
    //     {
    //       id: '2', 
    //       followed: true,
    //       name: 'Antonio', 
    //       surname: 'B.', 
    //       status: 'Hmm',
    //       location: {
    //         country: 'Canada', 
    //         city: 'Montreal',  
    //       },
    //       avatarImg: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/marco-di-antonio_1656067608330_x2.jpg?r=7241',
    //     },
    //     {
    //       id: '3', 
    //       followed: false,
    //       name: 'Makoto', 
    //       surname: 'J.', 
    //       status: 'I am ok',
    //       location: {
    //         country: 'Japan', 
    //         city: 'Tokio',  
    //       },
    //       avatarImg: 'https://womenandtravel.net/wp-content/uploads/2021/06/Minami-Hamabe.jpg',
    //     },
    //   ]
    // )   
  };

  return <div className={c.users}>
    <button onClick={getUsers}>Get users</button>
    <h2>Users you may know</h2>
    <ul className={c.users__list}>

      {
      props.users.map(user => 
      <li className={c.users__item} key={user.id}>
        <div className={c.users__avatar}>
          {/* <img src={user.avatarImg} width={100} alt="avatar" /> */}
          <img src={user.photos.small != null ? user.photos.small : DEFAULT_AVATAR} width={100} alt="avatar" />
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
          {/* <p>{user.location.country}</p>
          <p>{user.location.city}</p> */}
        </div>
        <p className={c.users__status}>Status: <br/> <span>"{user.status}"</span></p>
      </li>)
      }

    </ul>
  </div>
};

export default Users;
