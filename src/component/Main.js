import React, { Component } from "react";
import Footer from "./Footer";
import "./Main.css";
import "./Responsive.css";
import Section from "./Section";
import Header from "./Header";

class Main extends Component {
  render() {
    return (
      <div >
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default Main;
