import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Header />
            <div className="hero">
                <div className="animal"></div>
                <div className="bird"></div>
            </div>
            <Footer />
        </>
    );
}

export default Home;