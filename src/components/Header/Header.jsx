import NavBar from '../NavBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />        
      </Suspense>
    </div>
  );
};

export default Header;