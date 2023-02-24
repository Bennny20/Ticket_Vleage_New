import "./landing.scss"
import Home from "../../components/landing/Home";
import About from "../../components/landing/About";
import Work from "../../components/landing/Work";
import Testimonial from "../../components/landing/Testimonial";
import Contact from "../../components/landing/Contact";
import Footer from "../../components/landing/Footer";


const Landing = () => {
    return (
        <div className="App">
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing