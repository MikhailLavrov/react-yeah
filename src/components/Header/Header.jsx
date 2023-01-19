import c from './Header.module.css';

function Header() {
  return (
    <header className={c.header}>
      <img src='./logo192.png' alt="logo" />
    </header>
  );
}

export default Header;
