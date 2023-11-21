import { animals } from "../animalsList";
import { birds } from "../animalsList";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to='/' className="link">Home</NavLink>
                <NavLink to='/animals' className="link">Animals ({animals.length})</NavLink>
                <NavLink to='/birds' className="link">Birds ({birds.length})</NavLink>
                <NavLink to='/about' className="link">About</NavLink>
            </nav>
        </header>
    );
}

export default Header;