import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export class NewJobs extends Component {
  
  render() {
    return (
      <div id="newjobsport" className="text-center">
        <div className="container">
        <div className="section-title">
        <p className="avail">
        <h2 >Available Opportunities</h2>
        <div className="listofop">
          <h4>
        <p>Excited to be part of our journey?  <br/><br/> Please look out for new Opportunities at our LinkedIn New jobs section.
        <a href="https://www.linkedin.com/company/smart-machine-solutions/jobs/">Click Here.</a>
        
        </p>
        </h4>
        <br/>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Job Title</th>
      <th scope="col">Job Code</th>     
      <th scope="col">Status</th>
      <th scope="col">Posted Date</th>
      <th scope="col">Closed Date</th>
      <th scope="col">Eligibility to work in UK?</th>
    </tr>
  </thead>
  <tbody>
    
    <tr style={{cursor: 'hand'}}>
      <th scope="row">1</th>
      <td>IT Consultant</td>
      <td>SMS21-ITC-1</td>
      <td>Closed</td>
      <td>15/03/2021</td>
      <td>12/04/2021</td>
      <td>Sponsorship Avialable</td>
    </tr>
    <tr style={{cursor: 'hand'}}>
      <th scope="row">2</th>
      <td>Big Data Consultant</td>
      <td>SMS21-BDC-1</td>
      <td>Closed</td>
      <td>19/04/2021</td>
      <td>14/05/2021</td>
      <td>Sponsorship Avialable</td>
    </tr>
    <tr style={{cursor: 'hand'}}>
      <th scope="row">3</th>
      <td>Business Analyst</td>
      <td>SMS21-BA-1</td>
      <td>Closed</td>
      <td>26/04/2021</td>
      <td>21/05/2021</td>
      <td>Sponsorship Avialable</td>
    </tr>
    <tr style={{cursor: 'hand'}}>
      <th scope="row">4</th>
      <td>Software Tester</td>
      <td>SMS21-ST-1</td>
      <td>Closed</td>
      <td>26/04/2021</td>
      <td>21/05/2021</td>
      <td>Sponsorship Avialable</td>
    </tr>
    <tr style={{cursor: 'hand'}}>
      <th scope="row">5</th>
      <td>IT Consultant</td>
      <td>SMS21-ITC-2</td>
      <td>Closed</td>
      <td>03/05/2021</td>
      <td>28/05/2021</td>
      <td>Sponsorship Avialable</td>
    </tr>
  </tbody>
</table>
{/* <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router> */}
        </div>
        </p>
        </div>
        </div>
        </div>
    );}
    
}
export default NewJobs;
