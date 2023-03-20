import c from './Navigation.module.css';
import NavItem from './NavItem/NavItem';
import NavContacts from './NavContacts/NavContacts';
import AuthorInfo from './AuthorInfo/AuthorInfo';

function Navigation(props) {
  const createNavPoints = props.sidebar.navPoints.map(navPoint => (
    <NavItem path={navPoint.path} name={navPoint.name} key={navPoint.id} />
  ));
  
  return (
    <nav className={c.navigation}>
      <div className={c.navigation__authBlock}>

        { props.auth.isAuth
        ? (
          <AuthorInfo login={props.auth.login} 
                      id={props.auth.id} 
                      email={props.auth.email} 
                      avatarImg={props.auth.avatarImg} />
        ) : (
          ''
          )
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
