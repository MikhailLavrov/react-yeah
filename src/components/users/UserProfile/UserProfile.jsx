import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import c from './UserProfile.module.scss';
import Preloader from '../../Preloader/Preloader';
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
  const {id} = useParams();
  
  useEffect(() => {
    usersAPI.getProfile(id)
    .then(response => response.data)
    .then(data => setUser(data))
  }, [id])

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
                <Link to={user.contacts.facebook}>
                  <img width={25} src={FACEBOOK_ICON} alt="facebook" />
                </Link> : null}
                {user.contacts.website ? 
                <Link to={user.contacts.website}>
                  <img width={25} src={WEBSITE_ICON} alt="website" />
                </Link> : null}
                {user.contacts.vk ? 
                <Link to={user.contacts.vk}>
                  <img width={25} src={VK_ICON} alt="vk" />
                </Link> : null}
                {user.contacts.twitter ? 
                <Link to={user.contacts.twitter}>
                  <img width={25} src={TWITTER_ICON} alt="twitter" />
                </Link> : null}
                {user.contacts.instagram ? 
                <Link to={user.contacts.instagram}>
                  <img width={25} src={INSTAGRAM_ICON} alt="instagram" />
                </Link> : null}
                {user.contacts.youtube ? 
                <Link to={user.contacts.youtube}>
                  <img width={25} src={YOUTUBE_ICON} alt="youtube" />
                </Link> : null}
                {user.contacts.github ? 
                <Link to={user.contacts.github}>
                  <img width={25} src={GITHUB_ICON} alt="github" />
                </Link> : null}
                {user.contacts.mainLink ? 
                <Link to={user.contacts.mainLink}>
                  <img width={25} src={MAINLINK_ICON} alt="mainLink" />
                </Link> : null}
            </div>
          </div>
        </div>
      }
    </section>
  )
}

export default UserProfile;
