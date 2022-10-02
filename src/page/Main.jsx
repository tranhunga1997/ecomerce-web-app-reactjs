import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import "./css/landingStyles.scss";

function Main() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    return (
        <>
            <header>
                <Header />
                <Navigator />
            </header>
            <Outlet />
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Main;