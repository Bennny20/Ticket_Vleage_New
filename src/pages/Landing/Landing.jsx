import "./landing.scss"
import Home from "../../components/landing/Home";
import About from "../../components/landing/About";
import Contact from "../../components/landing/Contact";
import Footer from "../../components/landing/Footer";
import MatchCard from "../../components/landing/matchCard";
import ClubCard from "../../components/landing/clubCard";
import { Alert, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "../../AxiosConfig";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//npm install slick-carousel --save

const Landing = () => {

    var pathMatch = "/matches";
    const [matches, setMatches] = useState([]);

    useEffect(
        function () {
            axios.get(pathMatch).then(function (response) {
                setMatches(response.data)
                console.log("test matches:" + JSON.stringify(matches))
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
                <ClubCard />
            </div>
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing