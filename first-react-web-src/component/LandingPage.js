import React, { Component } from 'react';
import client1 from "./Assets/client1.png";
import client2 from "./Assets/client2.png";
import client3 from "./Assets/client3.png";
import client4 from "./Assets/client4.png";
import client5 from "./Assets/client5.png";
import desc1 from "./Assets/desc1.png";
import desc2 from "./Assets/desc2.png";

 class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className=" d-flex justify-content-center my-4 mx-5">
          <p>The #1 Landing Page Platform for 15,000+ Brands</p>
        </div>
        <div className="d-flex justify-content-around mx-5">
          <div>
            <img src={client1} alt="client1-img" />
          </div>
          <div>
            <img src={client2} alt="client2-img" />
          </div>
          <div>
            <img src={client3} alt="client3-img" />
          </div>
          <div>
            <img src={client4} alt="client4-img" />
          </div>
          <div>
            <img src={client5} alt="client5-img" />
          </div>
        </div>
        <hr style={{width:"85%",margin:"100px auto"}}/>
        <div className="row " style={{ margin: "250px 0 0 200px" }}>
          <div className="col-6">
            <h1
              style={{
                fontWeight: 900,
                fontFamily: "monospace",
                fontSize: "3.5em",
              }}
            >
              Build Beautiful <br />
              Landing Pages <br />
              Faster.
            </h1>
            <p className="text-muted my-4 ">
              Create custom landing pages Shades that convert <br /> more
              visitors than any website <br />
              -no coding required
            </p>
            <a href="#desc"> Get Started now &nbsp; &nbsp; &gt;</a>
          </div>
          <div className="col-6">
            <img src={desc1} alt="description1" />
          </div>
          <div className="col-6" style={{ marginTop: "150px" }}>
            <img src={desc2} alt="description2" />
          </div>
          <div className="col-6" style={{ marginTop: "150px" }}>
            <h1
              style={{
                fontWeight: 900,
                fontFamily: "monospace",
                fontSize: "3.5em",
              }}
            >
              Build Beautiful <br />
              Landing Pages <br />
              Faster.
            </h1>
            <p className="text-muted my-4 ">
              Create custom landing pages Shades that convert <br /> more
              visitors than any website <br />
              -no coding required
            </p>
            <a href="#desc"> Get Started now &nbsp; &nbsp; &gt;</a>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
