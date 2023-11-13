import { animals } from "./animalsList";
import { birds } from "./animalsList";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/' className="link">Home</Link>
                    <Link to='/animals' className="link">Animals ({animals.length})</Link>
                    <Link to='/birds' className="link">Birds ({birds.length})</Link>
                    <Link to='/about' className="link">About</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;