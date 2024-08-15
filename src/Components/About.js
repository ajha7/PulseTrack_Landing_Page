import React from "react";
import AboutBackground from "../Assets/about-background.png";
// import AboutBackgroundImage from "../Assets/about-background-image.png";
import AboutBackgroundImage from "../Assets/about-banner-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container" id="about-section">
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div> */}
      {/* <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div> */}
      <div >
        <p className="primary-subheading">About</p>
        <div className="about-section-text-container">
          <h1 className="primary-heading-about">
          Transform Organizational Visibility
          </h1>
          <p className="primary-text-about">
          Identifying problems with limited organizational visibility is one of the biggest <b>time-sinks</b> for executives.
          </p>
          <p className="primary-text-about">
          Instead of scheduling endless meetings to identify issues, uncover key insights in a heartbeat.<br></br>
          PulseTrack detects emerging problems at scale throughout your organization using AI-Powered omnichannel analytics.
          <br></br><br></br>
          Save executives hours, <b>save companies millions</b>.
          </p>
        </div>
        {/* <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;
