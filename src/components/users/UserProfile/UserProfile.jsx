import { NavLink } from "react-router-dom";
import c from './UserProfile.module.css';
import Preloader from '../../common/Preloader/Preloader';

const DEFAULT_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg';

let UserProfile = (props) => {
  if (!props.userProfile) {
    return <Preloader />
  }

  return (
    <section className={c.userProfile}>
      <NavLink to={'/users/'} className={c.userProfile__returnLink}>&#129120; Return</NavLink>

      <div className={c.userProfile__info}>
        <img src={props.userProfile.photos.large ? props.userProfile.photos.large : DEFAULT_AVATAR} 
             className={c.userProfile__image}
             width={300} 
             height={300} 
             alt="User avatar" />
        <div className={c.userProfile__data}>
          <p className={c.userProfile__name}>
            <span className={c.userProfile__key}>Name: </span>
            <span className={c.userProfile__value}>{props.userProfile.fullName}</span>
          </p>
          {props.userProfile.aboutMe ? 
          <p className={c.userProfile__about}>
            <span className={c.userProfile__key}>About me: </span> 
            <span className={c.userProfile__value}>{props.userProfile.aboutMe}</span> 
          </p> : null}
          {props.userProfile.lookingForAJob ? <p className={c.userProfile__jobSearch}>I am looking for a job</p> : <p>I am not looking for a job</p>}
          {props.userProfile.lookingForAJobDescription ? 
          <p className={c.userProfile__jobObjective}>
            <span className={c.userProfile__key}>Career objective: </span>
            <span className={c.userProfile__value}>{props.userProfile.lookingForAJobDescription}</span>
          </p> : null}
        </div>
      </div>
    </section>
  )
}

export default UserProfile;
