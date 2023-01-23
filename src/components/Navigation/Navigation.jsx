import c from './Navigation.module.css';
import NavItem from './NavItem/NavItem';
import NavContacts from './NavContacts/NavContacts';

function Navigation(props) {
  const createNavPoints = props.sidebar.navPoints.map(navPoint => (
    <NavItem  path={navPoint.path} name={navPoint.name}/>
  ));

  const getAuthorInfo = props.profile.authors.map(author => {
    return (
      <div className={c.navigation__authorInfo}>
        <img width={50} height={50} src={author.avatarImg} alt="ava" />
        <span>{author.name}</span>
      </div>
    );
  });

  return (
    <nav className={c.navigation}>
      {getAuthorInfo}
      <ul className={c.navigation__list}>
        {createNavPoints}
      </ul>
      <NavContacts  dialogs={props.dialogs} />
    </nav>
  );
}

export default Navigation;
