import c from './Navigation.module.css';
import NavItem from './NavItem/NavItem';
import NavContacts from './NavContacts/NavContacts';
import AuthorInfo from './AuthorInfo/AuthorInfo';

function Navigation(props) {
  const createNavPoints = props.sidebar.navPoints.map(navPoint => (
    <NavItem  path={navPoint.path} name={navPoint.name}  key={navPoint.key} />
  ));

  return (
    <nav className={c.navigation}>
      <AuthorInfo authors={props.profile.authors} />
      <ul className={c.navigation__list}>
        {createNavPoints}
      </ul>
      <NavContacts dialogs={props.dialogs} />
    </nav>
  );
}

export default Navigation;
