import c from './Navigation.module.scss';
import NavItem from './NavItem/NavItem';
import NavContacts from './NavContacts/NavContacts';
import AuthorInfo from './AuthorInfo/AuthorInfo';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const auth = useSelector((state) => state.auth);
  const dialogs = useSelector((state) => state.dialogsPage);
  const sidebar = useSelector((state) => state.sidebar);

  const createNavPoints = sidebar.navPoints.map(navPoint => (
    <NavItem path={navPoint.path}
             name={navPoint.name}
             key={navPoint.id} />
  ));
  console.log('Navigation isAuth: ', auth.isAuth);
  return (
    <nav className={c.navigation}>
      <div className={c.navigation__authBlock}>

        {auth.isAuth
        ? <AuthorInfo login={auth.login} 
                      id={auth.id} 
                      email={auth.email} 
                      avatarImg={auth.avatarImg} />
        : ''}

      </div>
      <ul className={c.navigation__list}>
        {createNavPoints}
      </ul>
      {auth.isAuth ? <NavContacts dialogs={dialogs} /> : ''}
    </nav>
  );
}

export default Navigation;
