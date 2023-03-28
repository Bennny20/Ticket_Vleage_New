import React from "react";
import AboutBackground from "../assets/about-background.png";
import AboutBackgroundImage from "../assets/about-background-image.png";


const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Night Wolf V.League 2023
        </h1>
        <p className="primary-text-about">
          The 2023 V.League 1, known as the Night Wolf V.League 1 for sponsorship reasons, is the 67th professional season of the top-flight football league in Vietnam, the 24th under the V.League 1 name. The season is scheduled to commence on 3 February 2023.
        </p>
        <p className="primary-text-about">
          The defending champions from the 2022 V.League 1 is Hanoi FC.
        </p>
        <p className="primary-text-about">
          This season will be the last to have an intra-year schedule (spring-to-autumn). There will also be a break from 20 February to 6 April for the 2023 AFC U-20 Asian Cup and from 18 April to 19 May for the 2023 Southeast Asian Games in Cambodia
        </p>
        <div className="about-buttons-container">
          <iframe name="player-video"
            width="887" height="499"
            src="https://www.youtube.com/embed/yFStOS1NiD0?&controls=0&showinfo=0&rel=0&autoplay=1&mute=1"
            title="Trailer Night Wolf V.League 1 - 2022 | VPF Media"
            allow="autoplay">
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
