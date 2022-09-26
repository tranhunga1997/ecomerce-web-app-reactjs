import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigator from "../components/Navigator";
import "./css/landingStyles.scss";

function Main() {
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