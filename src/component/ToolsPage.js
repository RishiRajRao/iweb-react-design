import React, { Component } from "react";
import tools1 from "./Assets/tools1.png";
import tools2 from "./Assets/tools2.png";
import tools3 from "./Assets/tools3.png";
import tools from "./Assets/tools.png";

class ToolsPage extends Component {
  render() {
    return (
      <div className="tools containerL">
        <img src={tools} alt="tools" />
        <div className="tools-table">
          <div className="tools-content">
            <img src={tools1} alt="tools1" />
            <div className="">
              <h3>Easy to use</h3>
              <p>
                Event is not like the most tech conferences. We want <br />
                our presentation to engage the audience,spark <br />
                discussion and inspire new ideas
              </p>
            </div>
          </div>
          <div className="tools-content">
            <img src={tools2} alt="tools1" />
            <div className="">
              <h3>Easy to use</h3>
              <p>
                Event is not like the most tech conferences. We want <br />
                our presentation to engage the audience,spark <br />
                discussion and inspire new ideas
              </p>
            </div>
          </div>
          <div className="tools-content">
            <img src={tools3} alt="tools1" />
            <div className="">
              <h3>Easy to use</h3>
              <p>
                Event is not like the most tech conferences. We want <br />
                our presentation to engage the audience,spark <br />
                discussion and inspire new ideas
              </p>
            </div>
          </div>
          <div className="tools-content">
            <img src={tools1} alt="tools1" />
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
    );
  }
}

export default ToolsPage;
