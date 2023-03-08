import axios from "../../AxiosConfig";
import React, { useEffect, useState } from "react";
import "./clubCard.scss"
import Slider from "react-slick";


//npm install react-slick --save


var pathClub = "/clubs";
const ClubCard = () => {
    const [clubs, setClubs] = useState([]);

    //Axios------------------------------------------
    useEffect(
        function () {
            axios.get(pathClub).then(function (response) {
                setClubs(response.data)
                console.log("test clubs:" + clubs)
            })
                .catch(function (err) {
                    console.log("clubCard err: ", err);
                });
        }, []
    )
    //-----------------------------------------------------

    // react-slick config

    const settings = {
        speed: 600,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000
    };

    //------------------------------------


    console.log(clubs)
    return (


        <div className="card__container">
            <h1>TEAMS</h1>
            <Slider {...settings} className="card__container--inner">
                {Array.from(clubs).map((club) => {
                    return (
                        <div className="card__container--inner--card" key={club._id}>

                            <img src={club.logo} alt="hero_img" />

                            <div className="card__container--inner--card--date_time">

                                <img src="https://www.wanderon.in/svg/map-pin.svg" alt="location" />
                                <p>{club.location}</p>
                            </div>
                            <div className="card__info">
                                <h2>{club.name}</h2>
                                <h3>{club.nameStadium}</h3>

                            </div>

                        </div>
                    );
                })}
            </Slider>
        </div>



    );
}

export default ClubCard;