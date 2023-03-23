import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import c from './Layout.module.scss';

const Layout = ({authorized}) => {
  return (
    <>
      <Header authorized={authorized} />
      <main className={c.layout}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default Layout;