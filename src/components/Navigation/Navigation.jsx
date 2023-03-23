import c from './Navigation.module.scss';
import NavItem from './NavItem/NavItem';
import NavContacts from './NavContacts/NavContacts';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const dialogs = useSelector((state) => state.dialogsPage);
  const sidebar = useSelector((state) => state.sidebar);

  const createNavPoints = sidebar.navPoints.map(navPoint => (
    <NavItem path={navPoint.path}
             name={navPoint.name}
             key={navPoint.id}
             icon={navPoint.icon} />
  ));
  
  return (
    <nav className={c.navigation}>
      <ul className={c.navigation__list}>
        {createNavPoints}
      </ul>
      {/* {auth.isAuth ? <NavContacts dialogs={dialogs} /> : ''} */}
    </nav>
  );
}

export default Navigation;
