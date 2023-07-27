import "./pricing.css";

import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <p>Netflix Clone</p>
          <p>Using ReactJS</p>
          <p>Not Responsive Design</p>
          <Link
            to="https://clonmenetflix.epizy.com"
            target="_blank"
            className="btn"
          >
            View Now
          </Link>
        </div>
        <div className="card">
          <p>Random Quote Generator</p>
          <p>Using REACT JS HTML CSS</p>
          <p>Responsive Design</p>
          <Link
            to="https://quotesgenerator17.netlify.app"
            target="_blank"
            className="btn"
          >
            View Now
          </Link>
        </div>
        <div className="card">
          <p>Weather App</p>
          <p>Using ReactJS</p>
          <p>Responsive Design</p>
          <Link to="https://myweather.rf.gd" target="_blank" className="btn">
            View Now
          </Link>
        </div>
        <div className="card">
          <p>Image Search App</p>
          <p>Using ReactJS and Material UI</p>
          <p>Responsive Design</p>
          <Link
            to="https://reactsearch-image.vercel.app"
            target="_blank"
            className="btn"
          >
            View Now
          </Link>
        </div>
        <div className="card">
          <p>Auth and Crud Application</p>
          <p>Using AngularJS, Json-Server and Angular Material</p>
          <p>Responsive Design</p>
          <Link
            to="https://authapp-black.vercel.app"
            target="_blank"
            className="btn"
          >
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
