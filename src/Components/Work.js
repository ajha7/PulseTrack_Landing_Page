import React from "react";
// import PickMeals from "../Assets/pick-meals-image.png";
import Integrations from "../Assets/integrations.png"
// import ChooseMeals from "../Assets/choose-image.png";
import Opensearch from "../Assets/opensearch_title.png"
// import DeliveryMeals from "../Assets/delivery-image.png";
import Piechart from "../Assets/piechart.png"

const Work = () => {
  const workInfoData = [
    {
      image: Integrations,
      title: "Deploy on communication channels",
      text: "Monitor and analyze your data",
    },
    {
      image: Opensearch,
      title: "Store and Aggregate",
      text: "Opensearch aggregates your data",
    },
    {
      image: Piechart,
      title: "Real-time Analytics",
      text: "Deeply understand your organization",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Deploy our app on your communication platforms like Zoom, Slack, or Webex. 
        It monitors conversations to extract and aggregate problems discussed. 
        The aggregated data is analyzed to provide a comprehensive dashboard, highlighting the most frequently mentioned issues within your organization.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>

      <div className = "primary-text">
        <br></br>
        <br></br>
        <h3>
        But is my data secure?
        </h3>
        <p>
        All your data is stored on Opensearch, which is SOC-2 compliant.
        Additionally, the app does all its processing locally, so your data is not being sent ​to external servers.
        </p>
      </div>
    </div>
  );
};

export default Work;
