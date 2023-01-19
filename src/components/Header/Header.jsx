import c from './Header.module.css';

const LOGO_SRC = './logo192.png';

function Header() {
  return (
    <header className={c.header}>
      <img src={LOGO_SRC} alt="logo" />
    </header>
  );
}

export default Header;
