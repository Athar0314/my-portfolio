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
          <p>Responsive Design</p>
          <Link to="https://clonmenetflix.epizy.com" className="btn">
            View Now
          </Link>
        </div>
        <div className="card">
          <p>My PortFolio</p>
          <p>Using REACT JS HTML CSS</p>
          <p>UnResponsive Design</p>
          <Link to="https://myportfolio17.rf.gd" className="btn">
            View Now
          </Link>
        </div>
        <div className="card">
          <p>Weather App</p>
          <p>Using ReactJS</p>
          <p>unResponsive Design</p>
          <Link to="https://myweather.rf.gd/?i=1" className="btn">
            View Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
