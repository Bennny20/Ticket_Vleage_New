import "./landing.scss"
import Home from "../../components/landing/Home";
import About from "../../components/landing/About";
import Contact from "../../components/landing/Contact";
import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//npm install slick-carousel --save

const Landing = () => {
    return (
        <div>
            <Navbar />
            <div className="App">
                <Home />
                <About />
                <Footer />
            </div>
        </div>
    )
}

export default Landing