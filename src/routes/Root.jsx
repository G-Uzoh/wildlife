import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = ({ clearSearchBar }) => {
    return (
        <>
            <Header handleSearchBarClean={clearSearchBar} />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;