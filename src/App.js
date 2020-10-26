import React from "react";
import Routers from "./components/routers/Routers";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
    <Routers/>
    <Footer/>
            </Router>
    </>
)
}
export default App;
