import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero">
                <Link className="profile animal" to="/animals"></Link>

                <Link className="profile bird" to="/birds"></Link>

                <Link className="profile fish" to="/fishes"></Link>
                
                <Link className="profile insect" to="/insects"></Link>
            </div>
        </>
    );
}

export default Home;