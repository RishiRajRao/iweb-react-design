import React, { Component } from "react";
import last from "./Assets/last.png";

class Banner extends Component {
  render() {
    return (
      <div className="bannerL containerL">
        <img src={last} alt="last" />

        <div className="bannerL-text">
        <p>Ready to get Started ?</p>
        <button className="btnL">Start free trial</button>
        </div>
      </div>
    );
  }
}

export default Banner;
