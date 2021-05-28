import React, { Component } from "react";
import navtopimage from "./Assets/navtopimage.png";

class BodyHead extends Component {
  render() {
    return (
      <div className="bodyheadL containerL">
        <div className="bodyhead-content">
          <h1>
            Get More <br />
            Customers
          </h1>
          <p >
            Create custom landing pages Shades that convert <br /> more visitors
            than any website-no coding required
          </p>
          <button type="button" className="btnL">
            Start my free trial
          </button>
        </div>

        <img src={navtopimage} alt="boy-pic" />
      </div>
    );
  }
}

export default BodyHead;
