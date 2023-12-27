import { animals, birds, fishes, insects } from "../animalsList";
import { Link, NavLink } from "react-router-dom";

const Header = ({ isOpen, handleMenuToggle, handleSearchBarClean }) => {
  return (
    <header>
      <Link to="/" onClick={handleSearchBarClean}>
        <h1 className="logo">Wildlife</h1>
      </Link>
      <nav>
        <ul className={`menu ${isOpen ? 'is-open' : ''}`}>
          <NavLink to="/" className="link" onClick={handleSearchBarClean && handleMenuToggle}>
            Home
          </NavLink>
          <NavLink to="/animals" className="link" onClick={handleSearchBarClean && handleMenuToggle}>
            Animals ({animals.length})
          </NavLink>
          <NavLink to="/birds" className="link" onClick={handleSearchBarClean && handleMenuToggle}>
            Birds ({birds.length})
          </NavLink>
          <NavLink to="/fishes" className="link" onClick={handleSearchBarClean && handleMenuToggle}>
            Fishes ({fishes.length})
          </NavLink>
          <NavLink to="/insects" className="link" onClick={handleSearchBarClean && handleMenuToggle}>
            Insects ({insects.length})
          </NavLink>
          <NavLink to="/about" className="link" onClick={handleSearchBarClean && handleMenuToggle}>
            About
          </NavLink>
        </ul>
        <ul className="mobile-menu" onClick={handleMenuToggle}>
          <i className="fa-solid fa-bars"></i>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
