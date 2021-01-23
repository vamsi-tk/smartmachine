import React, { Component } from "react";
import Popup from "reactjs-popup";
import Content from "./Content";

export class NewJobs extends Component {
  render() {
    return (
      <div id="newjobsport" className="text-center">
          <div className="section-title">
        <div className="newjobscontainer">
        <p className="avail">
        <h2 >Available Opportunities</h2>
        <div className="listofop">
        <span>DevOps Engineer(s)</span>
        <br/>
        <span>Software Developer(s)</span>
        <br/>

        <span>UI Developer</span>
        <br/>

        <span>SAP Consultant</span>
        <br/>

        <span>Solution Architect</span>
        <br/>

        <span>IT Consultant</span>
        <br/>

        </div>
        </p>

        <Popup modal trigger={<button>Click the link to Apply for the Job</button>}>
        {close => <Content close={close} />}
        
        </Popup>
        </div>
        </div>
        </div>
    );}
}
export default NewJobs;
