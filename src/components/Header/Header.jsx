import NavBar from '../NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <div>
      <header className={css.header}>
        <NavBar />
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Header;
