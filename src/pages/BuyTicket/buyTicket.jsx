import "./buyTicket.scss"
import Navbar from "../../components/landing/Navbar"
import MatchCard from "../../components/landing/matchCard";
import { Alert, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Combobox } from "react-widgets";
import StadiumMap from "./stadium-map.jpeg"

const BuyTicket = () => {
    const [matches, setMatches] = useState([])


    return (
        <div className="home-container">
            <Navbar />
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={10}>
                    <div className="text-center">
                        <h1>Match Details</h1>
                    </div>
                    {matches.length === 0 ? (
                        <Alert className="mt-5" variant="info">
                            No matches found
                        </Alert>
                    )
                        : (
                            Array.from(matches).map((x) => <MatchCard key={x._id} match={x} />)
                        )
                    }
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs={12} md={10}>
                    <Col xs={12} md={12}>
                        <div className="stadium-map">
                            <img src={StadiumMap} alt="" />
                        </div>
                    </Col>

                    <div className="text-center mt-5">
                        this is buy ticket section
                    </div>

                </Col>
            </Row>

        </div>
    );
};

export default BuyTicket;
