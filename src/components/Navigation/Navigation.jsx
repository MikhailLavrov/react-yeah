import c from './Navigation.module.css';
import NavItem from './NavItem/NavItem';
import NavContacts from './NavContacts/NavContacts';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
  const createNavPoints = props.sidebar.navPoints.map(navPoint => (
    <NavItem  path={navPoint.path} name={navPoint.name} key={navPoint.id} />
  ));

  return (
    <nav className={c.navigation}>
      <div className={c.navigation__authBlock}>

        {props.isAuth ? 
        <AuthorInfo login={props.login} id={props.id} email={props.email} />
        // <AuthorInfo authors={props.profile.authors} />
        : <NavLink className={c.navigation__loginLink} to={'/login'}>Login</NavLink>
        }

      </div>
      <ul className={c.navigation__list}>
        {createNavPoints}
      </ul>
      <NavContacts dialogs={props.dialogs} />
    </nav>
  );
}

export default Navigation;
