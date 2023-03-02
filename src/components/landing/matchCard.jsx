import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "../../AxiosConfig";
import moment from 'moment';



const MatchCard = ({ match, showDetails = true }) => {

    console.log(match)




    return (

        <div className="w-md-50 p-3 mt-1 mb-3">
            {/* 2 Teams  */}
            {match ?
                <Row className="w-md-50 p-3 shadow-lg rounded-4 mt-5 mb-3">
                    <Row className="justify-content-center">
                        <Col className="d-flex flex-column justify-content-center align-items-center sh">
                            <img
                                src={match.logoHomeClub}
                                alt="Team 1 flag"
                                className="mw-100 mh-100 rounded-3 shadow border"
                                style={{ width: '100px' }}
                            />
                            <p className="mt-3 text-primary fw-bold">
                                {match.nameHomeClub}
                            </p>
                        </Col>
                        <Col className="fw-bold text-primary d-flex flex-column justify-content-center align-items-center">
                            Vs
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <img
                                src={match.logoAwayClub}
                                alt="Team 1 flag"
                                className="mw-100 mh-100 rounded-3 shadow border"
                                style={{ width: '100px' }}
                            />
                            <p className="mt-3 text-primary fw-bold">
                                {match.nameAwayClub}
                            </p>
                        </Col>
                    </Row>
                    {/* Stadium */}
                    <Row className="mb-3">
                        <Col className="d-flex flex-column justify-content-center align-items-center text-center">
                            <div className="d-flex justify-content-evenly w-100">
                                <h5 className="fw-bold mb-2">
                                    Stadium :<b className="ms-1 text-primary">
                                        {match.nameStadium}
                                    </b>
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <hr className="w-50 mx-auto" />

                    {/* Date */}
                    <Row className="justify-content-center text-center">
                        <Col className="d-flex  justify-content-center align-items-center">
                            <h5 className="mt-3 ms-1 text-primary fw-bold">

                                {moment(match.date).isBefore(Date.now())
                                    ? `Ended : ${moment(match.date).fromNow()}`
                                    : `Played in : ${moment(match.date).format(
                                        'DD/MM/YYYY -  h:mm a',
                                    )}`}
                            </h5>
                        </Col>
                    </Row>
                    {showDetails && (
                        <Row>
                            <Col className="d-flex  justify-content-end align-items-center">
                                <Button
                                    // as={Link}
                                    // to={`/matches/${match.id}`}
                                    variant="secondary"
                                    className="px-3 rounded-3"
                                >
                                    Details
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Row>
                : <a></a>}

        </div>




    );
};

export default MatchCard;
