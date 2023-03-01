import React from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AboutBackgroundImage from "../assets/about-background-image.png";

function ClubCard() {
    return (
        <div>
            <h1> Clubs</h1>
            <Row className="w-md-50 p-3 mt-5 mb-3">
                <Col>
                    <Card className="justify-content-center" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={AboutBackgroundImage} style={{ width: '200px' }} />
                        <Card.Body>
                            <Card.Title>Club 1</Card.Title>
                            <Card.Text>
                                Club Description
                            </Card.Text>
                            <Button variant="primary">Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={AboutBackgroundImage} style={{ width: '200px' }} />
                        <Card.Body>
                            <Card.Title>Club 1</Card.Title>
                            <Card.Text>
                                Club Description
                            </Card.Text>
                            <Button variant="primary">Detail </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={AboutBackgroundImage} style={{ width: '200px' }} />
                        <Card.Body>
                            <Card.Title>Club 1</Card.Title>
                            <Card.Text>
                                Club Description
                            </Card.Text>
                            <Button variant="primary">Detail</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ClubCard;