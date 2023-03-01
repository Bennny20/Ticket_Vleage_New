import "./landing.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Home from "../../components/landing/Home";
import About from "../../components/landing/About";
import Work from "../../components/landing/Work";
import Testimonial from "../../components/landing/Testimonial";
import Contact from "../../components/landing/Contact";
import Footer from "../../components/landing/Footer";
import MatchCard from "../../components/landing/matchCard";
import ClubCard from "../../components/landing/clubCard";


const Landing = () => {
    return (
        <div className="App">
            <Home />
            <MatchCard />
            <ClubCard />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing