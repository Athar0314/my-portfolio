import "./hero2.css";

import React, { Component } from "react";

export default class Hero2 extends Component {
  render() {
    return (
      <div
        className="hero-img"
        style={{
          backgroundImage: `url(${this.props.imageurl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
