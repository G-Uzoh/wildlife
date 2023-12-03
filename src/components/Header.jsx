import { animals, birds, fishes, insects } from "../animalsList";
import { Link, NavLink } from "react-router-dom";

const Header = ({ handleSearchBarClean }) => {
  return (
    <header>
      <Link to="/" onClick={handleSearchBarClean}>
        <h1 className="logo">Wildlife</h1>
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
        <NavLink to="/fishes" className="link" onClick={handleSearchBarClean}>
          Birds ({fishes.length})
        </NavLink>
        <NavLink to="/insects" className="link" onClick={handleSearchBarClean}>
          Insects ({insects.length})
        </NavLink>
        <NavLink to="/about" className="link" onClick={handleSearchBarClean}>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
