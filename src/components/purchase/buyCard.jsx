import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "../../AxiosConfig";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



const BuyCard = ({ match, showDetails = true }) => {
    console.log(match)
    const options = ['Monday', 'Tuesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday']
    let isDisable = false;

    return (

        <div className="w-md-50 p-3 mt-1 mb-3">

            {/* 2 Teams  */}
            <Row className="w-md-50 p-3 shadow-lg rounded-4 mt-5 mb-3">

                <Row className="justify-content-center mt-3">

                    <Col className="d-flex flex-column justify-content-center align-items-center sh">
                        <div>
                            <div className="pt-3" >
                                <Autocomplete
                                    disabled
                                    options={options}
                                    style={{ width: 300 }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="DATE" variant="outlined" />
                                    }
                                />
                            </div>
                        </div>
                        <div className="pt-3">

                            <div >
                                <Autocomplete
                                    disabled={isDisable}

                                    options={options}
                                    style={{ width: 300 }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="QUANTITY" variant="outlined" />
                                    }
                                />
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <div className="pt-3" >
                                <Autocomplete
                                    disabled={isDisable}
                                    options={options}
                                    style={{ width: 300 }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="STAND" variant="outlined" />
                                    }
                                />
                            </div>
                        </div>
                        <div >
                            <div className="pt-3" >
                                <Autocomplete
                                    disabled
                                    options={options}
                                    style={{ width: 300 }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="PRICE" variant="outlined" />
                                    }
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <hr className=" mt-5 w-50 mx-auto" />
                </Row>

                {/* Date */}
                <Row className="justify-content-center text-center">
                    <Col className="d-flex  justify-content-center align-items-center">
                        <h5 className="mt-3 ms-1 fw-bold">
                            TOTAL :
                        </h5>
                    </Col>
                </Row>
                {showDetails && (
                    <Row>
                        <Col className="d-flex  justify-content-end align-items-center">
                            <Button
                                // as={Link}
                                // to={`/matches/${match.id}`}
                                variant="warning"
                                className="px-3 rounded-3"
                            >
                                Purchase
                            </Button>
                        </Col>
                    </Row>
                )}
            </Row>

        </div>




    );
};

export default BuyCard;
