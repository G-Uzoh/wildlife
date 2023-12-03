import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero">
                <Link className="animal" to="/animals"></Link>

                <Link className="bird" to="/birds"></Link>
            </div>
        </>
    );
}

export default Home;