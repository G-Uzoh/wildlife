import { animals } from "../animalsList";
import { birds } from "../animalsList";
import { Link, NavLink } from "react-router-dom";

const Header = ({ handleSearchBarClean }) => {
  return (
    <header>
      <Link to="/" onClick={handleSearchBarClean}>
        <h1 className="logo">Geo-Geo Wild</h1>
      </Link>
      <nav>
        <NavLink to="/" className="link" onClick={handleSearchBarClean}>
          Home
        </NavLink>
        <NavLink to="/animals" className="link" onClick={handleSearchBarClean}>
          Animals ({animals.length})
        </NavLink>
        <NavLink to="/birds" className="link" onClick={handleSearchBarClean}>
          Birds ({birds.length})
        </NavLink>
        <NavLink to="/about" className="link" onClick={handleSearchBarClean}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
