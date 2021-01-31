import React, { Component } from "react";


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
        <a className="JobLinkDoc" href="https://drive.google.com/file/d/1YYSfJmU5yZKHiXcppTPbPfjM6rwa3Qux/view?usp=sharing" target="_blank" rel="noopener noreferrer">Click to see Job Descriptions</a>
        <br/>
        <span>Email: hr@smartmachinesolutions.co.uk</span>
        </div>
        </div>
        </div>
    );}
}
export default NewJobs;
