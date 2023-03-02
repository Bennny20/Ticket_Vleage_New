import axios from "../../AxiosConfig";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./clubCard.scss"
import AboutBackgroundImage from "../assets/about-background-image.png";


var path = "/clubs";
const ClubCard = ({ club, showDetails = true }) => {
    const [isRender, setisRender] = useState(true);
    const [data, setData] = useState([]);
    const [formValue, setDataFormvalue] = useState();
    const [isShow, setisShow] = useState(true);

    useEffect(
        function () {
            axios
                .get(path)
                .then(function (data) {
                    console.log(data.data);
                    setData(data.data);
                    localStorage.setItem("clubs", JSON.stringify(data.data))
                })
                .catch(function (err) {
                    console.log(32, err);
                });
        },
        []
    );


    return (
        <div className="container">
            <img src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className="title">CLUB NAME</h1>
            <span className="price">LOCATION</span>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    );
}

export default ClubCard;