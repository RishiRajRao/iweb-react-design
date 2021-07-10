import React, { Component } from "react";
import navbar from "./Assets/navbar.png";
import "./Main.css";
import BodyHead from "./BodyHead";

class Header extends Component {
  render() {
    return (
      <header className="headerL ">
        <nav className="containerL navbarL">
          <img src={navbar} alt="nav-img" />
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

         <span> <a href="#Blog">Blog</a></span>

         <span> <a href="#Support">Support</a></span>

          <button type="button" className="btnL">
            <a href="#Support" id="free-trial-link">
              <small>Start free trial</small>
            </a>
          </button>
        </nav>

        <BodyHead />
                <p>Here is the remote change </p>
// also some comment
      </header>
    );
  }
}

export default Header;
