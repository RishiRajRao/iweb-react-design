import React, { Component } from "react";
import "./Main.css";
import LandingPage from "./LandingPage";
import ToolsPage from "./ToolsPage";
import PricingPage from "./PricingPage";

class Section extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <ToolsPage />
        <PricingPage />
      </div>
    );
  }
}

export default Section;
