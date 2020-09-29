import React from "react";
import Routers from "./components/routers/Routers";
import {BrowserRouter as Router} from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Router>
    <Routers/>
    <Footer/>
            </Router>
    </>
)
}
export default App;
