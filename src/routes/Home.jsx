import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="animal">
                    <NavLink to="/animals">Animals</NavLink>
                </div>
                <div className="bird">
                    <NavLink to="/birds">Birds</NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;