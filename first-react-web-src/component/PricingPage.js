import React, { Component } from 'react';
import last from "./Assets/last.png";

 class PricingPage extends Component {
  render() {
    return (
      <div>
         <div className="text-center">
          <div className="my-5">
            <h3 style={{ fontWeight: "800",fontSize:"3.5em",fontFamily:"monospace",wordSpacing:"-8px" }}>Simple pricing</h3>
          </div>
          <div className="text-muted">
            <p >
              Create custom landing pages with Shades that convert more 
            </p>
            <p>visitors than any website-no coding required</p>
          </div>
        </div>
        <div className="custom-toggle-button d-flex ">
          <div className="mr-auto monthly-box">MONTHLY</div>
          <div className="yearly-box">YEARLY</div>
        </div>
        {/* cards section */}
        <div className="row custom-cards mx-auto mt-5">
          <div className="card text-center col-3">
            <div className="card-body p-5">
              <small className="card-title text-muted">BASIC</small>
              <h1 className="card-text my-3" style={{ fontWeight: 900,fontSize:"3.5em" }}>
                $19
              </h1>
              <p className="card-text">
                <small className="text-muted">PER MONTH</small>
              </p>
            </div>
          </div>
          <div className="card text-center col-3">
            <div className="card-body p-5">
              <small className="card-title text-muted">PRO</small>
              <h1 className="card-text my-3" style={{ fontWeight: 900,fontSize:"3.5em"}}>
                $29
              </h1>
              <p className="card-text">
                <small className="text-muted">PER MONTH</small>
              </p>
            </div>
          </div>
          <div className="card text-center col-3">
            <div className="card-body p-5">
              <small className="card-title text-muted">SMART</small>
              <h1 className="card-text my-3" style={{ fontWeight: 900,fontSize:"3.5em" }}>
                $49
              </h1>
              <p className="card-text">
                <small className="text-muted">PER MONTH</small>
              </p>
            </div>
          </div>
          <div className="card text-center col-3">
            <div className="card-body p-5">
              <small className="card-title text-muted">EXCLUSIVE</small>
              <h1 className="card-text my-3" style={{ fontWeight: 900,fontSize:"3.5em"}}>
                $89
              </h1>
              <p className="card-text">
                <small className="text-muted">PER MONTH</small>
              </p>
            </div>
          </div>
          <div
            className="card text-center text-muted col-3 p-4"
            style={{ fontWeight: 800 }}
          >
            <div className="card-body">
              <p className="card-title mb-3">Unlimited Blocks</p>
              <p className="card-text my-3">5GB Cloud Storages</p>
              <p> Custom Domain Names </p>
              <p>
                <strike className="">Unlimited Emails</strike>
              </p>
              <button className="btn btn-dark text-light my-3 font-weight-bold">
                Get started now
              </button>
            </div>
          </div>
          <div
            className="card text-center text-muted col-3 p-4 "
            style={{ fontWeight: 800 }}
          >
            <div className="card-body">
              <p className="card-title mb-3">Unlimited Blocks</p>
              <p className="card-text my-3">5GB Cloud Storages</p>
              <p> Custom Domain Names </p>
              <p>Unlimited Emails</p>
              <button className="btn btn-success text-light my-3 font-weight-bold">
                Get started now
              </button>
            </div>
          </div>
          <div
            className="card text-center text-muted col-3 p-4"
            style={{ fontWeight: 800 }}
          >
            <div className="card-body">
              <p className="card-title mb-3">Unlimited Blocks</p>
              <p className="card-text my-3">5GB Cloud Storages</p>
              <p> Custom Domain Names </p>
              <p>Unlimited Emails</p>
              <button className="btn btn-dark text-light my-3 font-weight-bold">
                Get started now
              </button>
            </div>
          </div>
          <div
            className="card text-center text-muted col-3 p-4"
            style={{ fontWeight: 800 }}
          >
            <div className="card-body">
              <p className="card-title mb-3">Unlimited Blocks</p>
              <p className="card-text my-3">5GB Cloud Storages</p>
              <p> Custom Domain Names </p>
              <p>Unlimited Emails</p>
              <button className="btn btn-dark text-light my-3 font-weight-bold">
                Get started now
              </button>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="near-footer">
          <div className="near-footer-img">
            <img src={last} alt="last" />
          </div>
          <div className="near-footer-body container">
            <div className="text-light float-left" style={{ fontWeight: 900 }}>
              <p style={{ wordSpacing: "-8px", fontSize: "2.5em" }}>
                Ready to get Started ?
              </p>
            </div>
            <div className="">
              <button
                className="btn  btn-lg float-right text-dark"
                style={{ backgroundColor: "#0ef0a8" }}
              >
                Start free trial
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingPage
