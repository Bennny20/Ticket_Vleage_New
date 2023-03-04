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
import { Alert, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";




const Landing = () => {

    var pathMatch = "/matchs";
    var pathClub = "/clubs";
    const [dataMatches, setDataMatches] = useState([]);
    const [dataClubs, setDataClubs] = useState([]);
    const [matches, setMatches] = useState([]);
    const [clubs, setClubs] = useState([]);

    useEffect(
        function () {
            axios.get(pathMatch).then(function (dataMatches) {
                setMatches(dataMatches.data)
                console.log("test matches:" + JSON.stringify(matches))
            })
            axios.get(pathClub).then(function (dataClubs) {
                setClubs(dataClubs.data)
                console.log("test clubs:" + JSON.stringify(clubs))
            })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );



    return (
        <div className="App">
            <Home />

            <Row className="d-flex justify-content-center">
                <Col xs={12} md={10}>
                    <div className="text-center mt-5">
                        <h1>Incomming Matches</h1>
                    </div>
                    {matches.length === 0 ? (
                        <Alert className="mt-5" variant="info">
                            No matches found Managers Will add soon
                        </Alert>
                    )
                        : (
                            Array.from(matches).map((x) => <MatchCard key={x._id} match={x} />)
                        )
                    }
                </Col>
            </Row>

            <div className="col mt-5">
                <h1>Clubs</h1>

                {clubs.length === 0 ? (
                    <Alert className="mt-5" variant="info">
                        No clubs found Managers Will add soon
                    </Alert>
                )
                    : (
                        Array.from(clubs).map((x) => <ClubCard key={x._id} club={x} />)
                    )
                }
            </div>

            <ClubCard />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing