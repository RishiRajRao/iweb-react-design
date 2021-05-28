import React, { Component } from "react";
import navtopimage from "./Assets/navtopimage.png";
import navbar from "./Assets/navbar.png";
import "./Main.css";

class Header extends Component {
  render() {
    return (
        <header className="custom-header">
          <nav className="d-flex justify-content-end  align-items-center mr-5">
            <div className="mr-auto" style={{ marginLeft: "160px" }}>
              <img src={navbar} alt="nav-img" />
            </div>
            <div className="dropdown show">
              <a
                class="btn  dropdown-toggle"
                href="#b"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Landings
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#a">
                  Action
                </a>
                <a className="dropdown-item" href="#a">
                  Another action
                </a>
                <a className="dropdown-item" href="#a">
                  Something else here
                </a>
              </div>
            </div>
            <div className="dropdown show">
              <a
                className="btn  dropdown-toggle"
                href="#b"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#a">
                  Action
                </a>
                <a className="dropdown-item" href="#b">
                  Another action
                </a>
                <a className="dropdown-item" href="#c">
                  Something else here
                </a>
              </div>
            </div>
            <div className="custom-nav">
              <a style={{ color: "black" }} href="#Blog">
                Blog
              </a>
            </div>
            <div className="custom-nav">
              <a style={{ color: "black" }} href="#Support">
                Support
              </a>
            </div>
            <div className="custom-nav">
              <button
                type="button"
                className="btn btn-dark "
                style={{ padding: "0 15px" }}
              >
                <a href="#Support" id="free-trial-link">
                  <small>Start free trial</small>
                </a>
              </button>
            </div>
          </nav>
          <div className="img-top">
            <img src={navtopimage} alt="boy-pic" />
          </div>

          <div className="text-top">
            <h1
              style={{
                fontWeight: 900,
                fontFamily: "monospace",
                fontSize: "3.5em",
              }}
            >
              Get More <br />
              Customers
            </h1>
            <p className="my-4">
              Create custom landing pages Shades that convert <br /> more
              visitors than any website-no coding required
            </p>
            <button type="button" className="btn btn-dark btn-lg text-light">
              Start my free trial
            </button>
          </div>
        </header>
    
    );
  }
}

export default Header;
