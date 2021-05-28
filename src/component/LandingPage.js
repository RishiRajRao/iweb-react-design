import React, { Component } from "react";

import desc1 from "./Assets/desc1.png";
import desc2 from "./Assets/desc2.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-pageL containerL">
        <div className="landing-page-text">
          <h1>
            Build Beautiful <br />
            Landing Pages <br />
            Faster.
          </h1>
          <p className="">
            Create custom landing pages Shades that convert <br /> more visitors
            than any website <br />
            -no coding required
          </p>
          <a href="#desc"> Get Started now &nbsp; &nbsp; &gt;</a>
        </div>

        <img src={desc1} alt="description1" />

        <img src={desc2} alt="description2" />

        <div className="landing-page-text">
          <h1>
            Build Beautiful <br />
            Landing Pages <br />
            Faster.
          </h1>
          <p className="">
            Create custom landing pages Shades that convert <br /> more visitors
            than any website <br />
            -no coding required
          </p>
          <a href="#desc"> Get Started now &nbsp; &nbsp; &gt;</a>
        </div>
      </div>
    );
  }
}

export default LandingPage;
