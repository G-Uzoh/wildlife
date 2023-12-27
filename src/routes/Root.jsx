import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = ({ isOpen, handleMenuToggle, clearSearchBar }) => {
    return (
        <>
            <Header isOpen={isOpen} handleMenuToggle={handleMenuToggle} handleSearchBarClean={clearSearchBar} />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;