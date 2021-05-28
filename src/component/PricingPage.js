import React, { Component } from "react";

class PricingPage extends Component {
  render() {
    return (
      <div className="pricingL containerL">

        <div className="pricing-text">
          <h3>Simple pricing</h3>
          <p>Create custom landing pages with Shades that <br/> convert more
          visitors than any website- <br/>no coding required</p>
        </div>

        <div className="subscription-toggle-button">
          <div className="monthly-box">MONTHLY</div>
          <div className="yearly-box">YEARLY</div>
        </div>


        {/* cards section */}
        <div className="pricing-pkgs">

         <div className="pricing-pkg-cards">
         <div className="pkg-head">
            <small className="">BASIC</small>
            <h1 className="">$19</h1>
            <p className="">
              <small className="">PER MONTH</small>
            </p>
          </div>
          <div className="pkg-body">
            <p className="">Unlimited Blocks</p>
            <p className="">5GB Cloud Storages</p>
            <p> Custom Domain Names </p>
            <p>
              <strike className="">Unlimited Emails</strike>
            </p>
            <button className="btnL">Get started now</button>
          </div>
         </div>

         <div className="pricing-pkg-cards">
         <div className="pkg-head">
            <small className="">BASIC</small>
            <h1 className="">$19</h1>
            <p className="">
              <small className="">PER MONTH</small>
            </p>
          </div>
          <div className="pkg-body">
            <p className="">Unlimited Blocks</p>
            <p className="">5GB Cloud Storages</p>
            <p> Custom Domain Names </p>
            <p>
              <strike className="">Unlimited Emails</strike>
            </p>
            <button className="btnL">Get started now</button>
          </div>
         </div>

         <div className="pricing-pkg-cards">
         <div className="pkg-head">
            <small className="">BASIC</small>
            <h1 className="">$19</h1>
            <p className="">
              <small className="">PER MONTH</small>
            </p>
          </div>
          <div className="pkg-body">
            <p className="">Unlimited Blocks</p>
            <p className="">5GB Cloud Storages</p>
            <p> Custom Domain Names </p>
            <p>
              <strike className="">Unlimited Emails</strike>
            </p>
            <button className="btnL">Get started now</button>
          </div>
         </div>

         <div className="pricing-pkg-cards">
         <div className="pkg-head">
            <small className="">BASIC</small>
            <h1 className="">$19</h1>
            <p className="">
              <small className="">PER MONTH</small>
            </p>
          </div>
          <div className="pkg-body">
            <p className="">Unlimited Blocks</p>
            <p className="">5GB Cloud Storages</p>
            <p> Custom Domain Names </p>
            <p>
              <strike className="">Unlimited Emails</strike>
            </p>
            <button className="btnL">Get started now</button>
          </div>
         </div>

        </div>







      </div>
    );
  }
}

export default PricingPage;
