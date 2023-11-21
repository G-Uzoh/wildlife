import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="animal">
                    <Link to="/animals">Animals</Link>
                </div>
                <div className="bird">
                    <Link to="/birds">Birds</Link>
                </div>
            </div>
        </>
    );
}

export default Home;