import c from './FollowList.module.scss';

export const FollowList = ({followers}) => {

  const follower = followers.slice(0, 5).map(follower => {
    return (
      <li className={c.followList__item} title={follower.name}>
        <div className={c.followList__image}>
          <img width={100} src={follower.avaPath} alt="follower avatar" />
        </div>
      </li>
    );
  })

  return (
    <ul className={c.followList}>
      {follower}
      {followers.length > 5 && <span className={c.followList__moreCounter}>+{followers.length - 5}</span>}
    </ul>
  );
}
