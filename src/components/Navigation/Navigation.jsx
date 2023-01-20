import c from './Navigation.module.css';
import NavItem from './NavItem/NavItem';

function Navigation(props) {
  const createNavPoints = props.state.navPoints.map(navPoint => (
    <NavItem  path={navPoint.path} name={navPoint.name}/>
  ));

  return (
    <nav className={c.navigation}>
      <ul>
        {createNavPoints}
      </ul>
    </nav>
  );
}

export default Navigation;
