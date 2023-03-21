import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import c from './UserProfile.module.css';
import Preloader from '../../common/Preloader/Preloader';
import { usersAPI } from "../../../api/api";

import INSTAGRAM_ICON from '../../../assets/socials/Intersect.png';
import FACEBOOK_ICON from '../../../assets/socials/facebook.png';
import GITHUB_ICON from '../../../assets/socials/github.png';
import YOUTUBE_ICON from '../../../assets/socials/youtube.png';
import WEBSITE_ICON from '../../../assets/socials/website.png';
import VK_ICON from '../../../assets/socials/vk.png';
import TWITTER_ICON from '../../../assets/socials/twitter.png';
import MAINLINK_ICON from '../../../assets/socials/mainlink.png';
import DEFAULT_AVATAR from '../../../assets/default-avatar.jpg';

export const UserProfile = () => {
  const [user, setUser] = useState();
  // Get the userId param from the URL.
  const params = useParams();
  
  useEffect(() => {
    usersAPI.getProfile(params.id)
    .then(response => response.data)
    .then(data => setUser(data))
  }, [params.id])

  return (
    <section className={c.userProfile}>
      <NavLink to={'/users/'} className={c.userProfile__returnLink}>&#129120; Return</NavLink>
      {!user 
        ? <Preloader />
        : <div className={c.userProfile__info}>
            <img src={user.photos.large ? user.photos.large : DEFAULT_AVATAR} 
              className={c.userProfile__image}
              width={300} 
              height={300} 
              alt="User avatar" />
            <div className={c.userProfile__data}>
              <p className={c.userProfile__name}>
                <span className={c.userProfile__key}>Name: </span>
                <span className={c.userProfile__value}>{user.fullName}</span>
              </p>

              {user.aboutMe
              ? <p className={c.userProfile__about}>
                  <span className={c.userProfile__key}>About me: </span> 
                  <span className={c.userProfile__value}>{user.aboutMe}</span> 
                </p>
              : null}

              {user.lookingForAJob
              ? <p className={c.userProfile__jobSearch}>
                  I am looking for a job
                </p>
              : <p>I am not looking for a job</p>}

              {user.lookingForAJobDescription 
              ? <p className={c.userProfile__jobObjective}>
                  <span className={c.userProfile__key}>Career objective: </span>
                  <span className={c.userProfile__value}>{user.lookingForAJobDescription}</span>
                </p>
              : null}

              <div className={c.userProfile__socials}>
                {user.contacts.facebook ? 
                <a href={user.contacts.facebook}>
                  <img width={25} src={FACEBOOK_ICON} alt="facebook" />
                </a> : null}
                {user.contacts.website ? 
                <a href={user.contacts.website}>
                  <img width={25} src={WEBSITE_ICON} alt="website" />
                </a> : null}
                {user.contacts.vk ? 
                <a href={user.contacts.vk}>
                  <img width={25} src={VK_ICON} alt="vk" />
                </a> : null}
                {user.contacts.twitter ? 
                <a href={user.contacts.twitter}>
                  <img width={25} src={TWITTER_ICON} alt="twitter" />
                </a> : null}
                {user.contacts.instagram ? 
                <a href={user.contacts.instagram}>
                  <img width={25} src={INSTAGRAM_ICON} alt="instagram" />
                </a> : null}
                {user.contacts.youtube ? 
                <a href={user.contacts.youtube}>
                  <img width={25} src={YOUTUBE_ICON} alt="youtube" />
                </a> : null}
                {user.contacts.github ? 
                <a href={user.contacts.github}>
                  <img width={25} src={GITHUB_ICON} alt="github" />
                </a> : null}
                {user.contacts.mainLink ? 
                <a href={user.contacts.mainLink}>
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
