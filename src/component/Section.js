import React, { Component } from "react";
import "./Main.css";
import LandingPage from "./LandingPage";
import ToolsPage from "./ToolsPage";
import PricingPage from "./PricingPage";
import Client from "./Client";
import Banner from "./Banner";


class Section extends Component {
  render() {
    return (
      <div>
        <Client/>
        <LandingPage />
        <ToolsPage />
        <PricingPage />
        <Banner/>
      </div>
    );
  }
}

export default Section;
