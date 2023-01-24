import c from './Header.module.css';

const LOGO_SRC = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png';

function Header() {
  return (
    <header className={c.header}>
      <img src={LOGO_SRC} alt="logo" />
      <span>React JS Network</span>
    </header>
  );
}

export default Header;
