import { animals } from "./animalsList";
import { birds } from "./animalsList";

const Header = () => {
    return (
        <header>
            <ul>
                <li><a href="http://">Home</a></li>
                <li><a href="http://">Animals ({animals.length})</a></li>
                <li><a href="http://">Birds ({birds.length})</a></li>
                <li><a href="http://">About</a></li>
            </ul>
        </header>
    );
}

export default Header;