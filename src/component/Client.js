import React, { Component } from "react";
import client1 from "./Assets/client1.png";
import client2 from "./Assets/client2.png";
import client3 from "./Assets/client3.png";
import client4 from "./Assets/client4.png";
import client5 from "./Assets/client5.png";

class Client extends Component {
  render() {
    return (
      <div className="clientL containerL">
        <p>The #1 Landing Page Platform for 15,000+ Brands</p>

        <div className="client-img">
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
        <hr />
      </div>
    );
  }
}

export default Client;
