import c from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={c.navigation}>
      <ul>
        <li>
          <a href='#'>Profile</a>
        </li>
        <li>
          <a href='#'>Messages</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Music</a>
        </li>
        <li>
          <a href='#'>Settings</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
