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
          <div className={c.userProfile__socials}>
            {props.userProfile.contacts.facebook ? 
            <a href={props.userProfile.contacts.facebook}>
              <img width={25} src={FACEBOOK_ICON} alt="facebook" />
            </a> : null}
            {props.userProfile.contacts.website ? 
            <a href={props.userProfile.contacts.website}>
              <img width={25} src={WEBSITE_ICON} alt="website" />
            </a> : null}
            {props.userProfile.contacts.vk ? 
            <a href={props.userProfile.contacts.vk}>
              <img width={25} src={VK_ICON} alt="vk" />
            </a> : null}
            {props.userProfile.contacts.twitter ? 
            <a href={props.userProfile.contacts.twitter}>
              <img width={25} src={TWITTER_ICON} alt="twitter" />
            </a> : null}
            {props.userProfile.contacts.instagram ? 
            <a href={props.userProfile.contacts.instagram}>
              <img width={25} src={INSTAGRAM_ICON} alt="instagram" />
            </a> : null}
            {props.userProfile.contacts.youtube ? 
            <a href={props.userProfile.contacts.youtube}>
              <img width={25} src={YOUTUBE_ICON} alt="youtube" />
            </a> : null}
            {props.userProfile.contacts.github ? 
            <a href={props.userProfile.contacts.github}>
              <img width={25} src={GITHUB_ICON} alt="github" />
            </a> : null}
            {props.userProfile.contacts.mainLink ? 
            <a href={props.userProfile.contacts.mainLink}>
              <img width={25} src={MAINLINK_ICON} alt="mainLink" />
            </a> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile;
