import React from "react";
import '../App.css'
export default ({ close }) => (
  <div className="modal">
    <a href='/' className="close" onClick={close}>X</a>
    <div className="header"> Modal Title </div>
    <div className="content">
    <table className="customTable">
        <tbody>
      <tr>
        <td>
        Job Title:
        </td>
        <td>
        DevOps Engineer(s)
        </td>
      </tr>
      <tr>
        <td>SOC Code:</td>
        <td>2135 (IT business analysts, architects and systems designers)</td>
      </tr>
    <tr>
      <td>Location:</td>
      <td>Bristol</td>
    </tr>
    <tr>
      <td>Salary:</td>
      <td>£37,000</td>
    </tr>
    <tr>
      <td>Any other company benefits/relocation packages:</td>
      <td>None</td>
    </tr>
    <tr>
      <td>Main Duties of the Role:</td>
      <td>•	Create and develop systems within company
•	Compass existing roles of the agile teams, product, engineering, security, information technology, quality assurance, and operations
•	Analyse data to improve existing software
•	Increase workplace productivity

</td>
    </tr>
    <tr>
      <td>Skills and experience required for the role:</td>
      <td>•	Source Control (Git, Bitbucket, Svn)
•	Continuous Integration (Jenkins, Bamboo, VSTS )
•	Infrastructure Automation (Puppet, Chef, Ansible)
•	Deployment Automation & Orchestration (Jenkins, VSTS, Octopus Deploy)
•	Container Concepts (LXD, Docker)
•	Orchestration (Kubernetes, Mesos, Swarm)
•	Cloud (AWS, Azure, GoogleCloud, Openstack)
•	8+ years of experience
</td>
    </tr>
    </tbody>
    </table>
    <button className="applylink" href="">Apply to this position?</button>
    </div>
    
  </div>
);
