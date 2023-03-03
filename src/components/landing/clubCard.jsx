import axios from "../../AxiosConfig";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./clubCard.scss"
import AboutBackgroundImage from "../assets/about-background-image.png";


const ClubCard = ({ club, showDetails = true }) => {
    console.log(club)
    return (

        <div>
            {club ? <div className="container-club-card">
                <img src={club.logo} alt="" width="500" height="500" />
                <h1 className="title">{club.name}</h1>
                <span className="price">{club.location}</span>
                <p className="desc">
                    {club.nameStadium} is a football stadium in {club.location} and the home of {club.name}.
                </p>
            </div> : <a></a>}

        </div>


    );
}

export default ClubCard;