import React, { Component } from 'react';
import tools1 from "./Assets/tools1.png";
import tools2 from "./Assets/tools2.png";
import tools3 from "./Assets/tools3.png";
import tools from "./Assets/tools.png";

 class ToolsPage extends Component {
  render() {
    return (
      <div>
        <div className="tools">
          <div className="tools-img">
            <img src={tools} alt="tools" />
          </div>
          <div className="row tools-text ">
            <div className="col-6">
              <div className="d-flex">
                <div className="mr-5">
                  <img src={tools1} alt="tools1" />
                </div>
                <div className="">
                  <h3>Easy to use</h3>
                  <p>
                    Event is not like the most tech conferences. We want <br />
                    our presentation to engage the audience,spark <br />
                    discussion and inspire new ideas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div className="mr-5">
                  <img src={tools2} alt="tools2" />
                </div>
                <div className="">
                  <h3>Easy to use</h3>
                  <p>
                    Event is not like the most tech conferences. We want <br />
                    our presentation to engage the audience,spark <br />
                    discussion and inspire new ideas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div className="mr-5">
                  <img src={tools3} alt="tools3" />
                </div>
                <div className="">
                  <h3>Easy to use</h3>
                  <p>
                    Event is not like the most tech conferences. We want <br />
                    our presentation to engage the audience,spark <br />
                    discussion and inspire new ideas
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex">
                <div className="mr-5">
                  <img src={tools1} alt="tools1" />
                </div>
                <div className="">
                  <h3>Easy to use</h3>
                  <p>
                    Event is not like the most tech conferences. We want <br />
                    our presentation to engage the audience,spark <br />
                    discussion and inspire new ideas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ToolsPage
