import { NavLink } from "react-router-dom";
import c from './UserProfile.module.css';
import Preloader from '../../common/Preloader/Preloader';

import INSTAGRAM_ICON from '../../../assets/socials/Intersect.png';
import FACEBOOK_ICON from '../../../assets/socials/facebook.png';
import GITHUB_ICON from '../../../assets/socials/github.png';
import YOUTUBE_ICON from '../../../assets/socials/youtube.png';
import WEBSITE_ICON from '../../../assets/socials/website.png';
import VK_ICON from '../../../assets/socials/vk.png';
import TWITTER_ICON from '../../../assets/socials/twitter.png';
import MAINLINK_ICON from '../../../assets/socials/mainlink.png';
import DEFAULT_AVATAR from '../../../assets/default-avatar.jpg';

let UserProfile = (props) => {
  return (
    <section className={c.userProfile}>
      <NavLink to={'/users/'} className={c.userProfile__returnLink}>&#129120; Return</NavLink>

      
      {
      !props.user ? <Preloader /> :

      <div className={c.userProfile__info}>
        <img src={props.user.photos.large ? props.user.photos.large : DEFAULT_AVATAR} 
             className={c.userProfile__image}
             width={300} 
             height={300} 
             alt="User avatar" />
        <div className={c.userProfile__data}>
          <p className={c.userProfile__name}>
            <span className={c.userProfile__key}>Name: </span>
            <span className={c.userProfile__value}>{props.user.fullName}</span>
          </p>
          {props.user.aboutMe ? 
          <p className={c.userProfile__about}>
            <span className={c.userProfile__key}>About me: </span> 
            <span className={c.userProfile__value}>{props.user.aboutMe}</span> 
          </p> : null}
          {props.user.lookingForAJob ? <p className={c.userProfile__jobSearch}>I am looking for a job</p> : <p>I am not looking for a job</p>}
          {props.user.lookingForAJobDescription ? 
          <p className={c.userProfile__jobObjective}>
            <span className={c.userProfile__key}>Career objective: </span>
            <span className={c.userProfile__value}>{props.user.lookingForAJobDescription}</span>
          </p> : null}
          <div className={c.userProfile__socials}>
            {props.user.contacts.facebook ? 
            <a href={props.user.contacts.facebook}>
              <img width={25} src={FACEBOOK_ICON} alt="facebook" />
            </a> : null}
            {props.user.contacts.website ? 
            <a href={props.user.contacts.website}>
              <img width={25} src={WEBSITE_ICON} alt="website" />
            </a> : null}
            {props.user.contacts.vk ? 
            <a href={props.user.contacts.vk}>
              <img width={25} src={VK_ICON} alt="vk" />
            </a> : null}
            {props.user.contacts.twitter ? 
            <a href={props.user.contacts.twitter}>
              <img width={25} src={TWITTER_ICON} alt="twitter" />
            </a> : null}
            {props.user.contacts.instagram ? 
            <a href={props.user.contacts.instagram}>
              <img width={25} src={INSTAGRAM_ICON} alt="instagram" />
            </a> : null}
            {props.user.contacts.youtube ? 
            <a href={props.user.contacts.youtube}>
              <img width={25} src={YOUTUBE_ICON} alt="youtube" />
            </a> : null}
            {props.user.contacts.github ? 
            <a href={props.user.contacts.github}>
              <img width={25} src={GITHUB_ICON} alt="github" />
            </a> : null}
            {props.user.contacts.mainLink ? 
            <a href={props.user.contacts.mainLink}>
              <img width={25} src={MAINLINK_ICON} alt="mainLink" />
            </a> : null}
          </div>
        </div>
      </div>
      }
    </section>
  )
}

export default UserProfile;
