import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footerL containerL">
        <div>
          <h1>Help menu</h1>
          <div className="footerL-help-menu">
            <ul id="help-menu-firstList">
              <li>
                <a href="#A">About</a>
              </li>
              <li>
                <a href="#A">Features</a>
              </li>
              <li>
                <a href="#A">Works</a>
              </li>
              <li>
                <a href="#A">Carrer</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#B">Contact</a>
              </li>
              <li>
                <a href="#B"> Help & Support</a>
              </li>
              <li>
                <a href="#B">Privacy Policy</a>
              </li>
              <li>
                <a href="#B">Terms & conditions</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h1>Products</h1>
          <ul>
            <li>
              <a href="#C">Essentials Landing Page</a>
            </li>
            <li>
              <a href="#C">Alpha Dash Pro</a>
            </li>
            <li>
              <a href="#C">Karnel Admin Dashboard</a>
            </li>
            <li>
              <a href="#C">Gray UI Kit</a>
            </li>
          </ul>
        </div>

        <div className="footerL-newsletter">
         <div className="newsletter-content">
         <p>Subscribe to our newsletter</p>
          <p>
            Subscribe to get latest offers,news and events <br /> announcements.
            No spam in your inbox
          </p>
          <input type="text" placeholder="Enter the email" />
          <button> <i className="fas fa-arrow-right "></i> </button>
         </div>
        </div>
      </div>
    );
  }
}

export default Footer;
