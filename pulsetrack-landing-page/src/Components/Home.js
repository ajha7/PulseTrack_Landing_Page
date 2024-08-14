import React from "react";
// import BannerBackground from "../Assets/home-banner-background.png";
import BannerBackground from "../Assets/home-background-image.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            PulseTrack
          </h1>
          <p className="primary-text">
            Empower your organization with deep insights from internal communication channels. 
            <br></br>
            Analyze meetings and messages to uncover key issues and deliver actionable reports.
          </p>
          <a href="https://forms.gle/bbZPJJyhr7qXX1mR6" target="_blank">
            <button className="secondary-button">
              Join the Waitlist <FiArrowRight />{""}
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};


export default Home;
