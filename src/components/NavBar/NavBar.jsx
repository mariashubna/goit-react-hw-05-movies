import { Link } from "react-router-dom";
import css from './NavBar.module.css'
const NavBar = () => {
    return (
      <nav className={css.nav}>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </nav>
    );
  };
  
  export default NavBar;