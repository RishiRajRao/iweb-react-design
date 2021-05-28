import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="row m-2 " >
          <div className="text-muted p-5 m-1 col-7 ">
            <table style={{ width: "100%" }}>
              <tr className="my-3">
                <th>Help menu</th>
                <th></th>
                <th>Products</th>
              </tr>
              <tr>
                <td>About</td>
                <td>Contact</td>
                <td>Essential Landing Page</td>
              </tr>
              <tr>
                <td>Features</td>
                <td>Help & Support</td>
                <td>Alpha Dashboard Pro</td>
              </tr>
              <tr>
                <td>Works</td>
                <td>Privacy Policy</td>
                <td>KarnelAdmin Dashboard</td>
              </tr>
              <tr>
                <td>Carrer</td>
                <td>Terms & Conditions</td>
                <td>Gray UI kit</td>
              </tr>
            </table>
          </div>

          <div className="col" >
            <div
              className="card w-75 m-5  custom-footer-card "
              style={{ backgroundColor: "#bcf1e0" }}
            >
              <div className="card-body">
                <small class="card-title text-muted ">
                  Subscribe to our newsletter
                </small>
                <p className="card-text mt-4">
                  Subscribe to get latest offers,news and events <br />{" "}
                  announcements. No spam in your inbox
                </p>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your email address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button class="btn btn-success" type="button">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
