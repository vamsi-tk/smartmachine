import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class NewJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      close: false,
    };
  }

  render() {
    return (
      <div id="newjobsport" className="text-center">
        <div className="container">
          <div className="section-title">
            <p className="avail">
              <h2>Available Opportunities</h2>
              <div className="listofop">
                <h4>
                  <p>
                    Excited to be part of our journey? <br />
                    <br /> Please look out for new Opportunities at our LinkedIn
                    New jobs section.
                    <a href="https://www.linkedin.com/company/smart-machine-solutions/jobs/">
                      Click Here.
                    </a>
                  </p>
                </h4>
                <br />
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
                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show: true })}
                    >
                      <th scope="row">1</th>
                      <td>IT Consultant</td>
                      <td>SMS21-ITC-1</td>
                      <td>Closed</td>
                      <td>15/03/2021</td>
                      <td>12/04/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <Modal
                      show={this.state.show}
                      animation={true}
                      size="lg"
                      className=" shadow-lg border"
                    >
                      <Modal.Header className="text-info text-white text-center py-1">
                        <Modal.Title className="text-center">
                          <h2>JOB DESCRIPTION</h2>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="py-0 border">
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Job Description:</h3>
                          <li>
                            Liaise with internal/external clients to analyse
                            business procedure, clarify client’s requirements
                            and to define the scope of existing software,
                            hardware, and network provision.
                          </li>
                          <li>
                            Undertake feasibility studies for major IT
                            developments, incorporating costs and benefits and
                            presents proposals to clients.
                          </li>
                          <li>
                            Communicate the impact of emerging technologies to
                            clients and advises upon the potential introduction
                            of such technology.
                          </li>
                          <li>
                            Provide advice and assistance in the procurement,
                            provision, delivery, installation, maintenance and
                            use of IT systems and their environments.
                          </li>
                          Examine existing business models and flows of data and
                          design functional specifications and test plans for
                          new systems to meet client’s needs.
                          <li>
                            Research, analyse, evaluate, and monitor network
                            infrastructure and performance.
                          </li>
                          Work closely with clients to implement new systems.
                          <li>
                            Effective communication skills (written and verbal)
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                            Proven experience as an IT Consultant/Architect.{" "}
                          </li>
                          <li>
                            Experience in designing, developing, and
                            implementing end to end data solutions based on
                            industry standards and best practices.{" "}
                          </li>
                          <li>
                            Bachelor's Degree in Computer Science, Information
                            Systems, or related field.{" "}
                          </li>

                          <li>
                            6+ years’ experience in the IT Infrastructure
                            management.{" "}
                          </li>
                        </ul>
                      </Modal.Body>
                      <Modal.Footer className="py-1 d-flex justify-content-center">
                        <div>
                          <Button
                            variant="outline-dark"
                            onClick={() => this.setState({ show: false })}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>


                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show1: true })}
                    >
                      <th scope="row">2</th>
                      <td>Big Data Consultant</td>
                      <td>SMS21-BDC-1</td>
                      <td>Closed</td>
                      <td>19/04/2021</td>
                      <td>14/05/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <Modal
                      show={this.state.show1}
                      animation={true}
                      size="lg"
                      className=" shadow-lg border"
                    >
                      <Modal.Header className="text-info text-white text-center py-1">
                        <Modal.Title className="text-center">
                          <h2>JOB DESCRIPTION</h2>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="py-0 border">
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Job Description:</h3>
                          <li>
                          Big Data integration to Tableau using SQL database query to automate executive-level dashboards. 
                          </li>
                          <li>
                          BigData integration of OSS measurement into Quality standards and Quality Management Systems 
                          </li>
                          <li>
                          Single Point of Contact for Customer experience management bigdata platform deployment, installation, commissioning, maintenance, administration and deliver contractual reports. 
                          </li>
                          <li>
                          Design and implement data module using ETL process and tools. 
                          </li>
                          Deploy CEM tool – SPI (module of SmartCare), from integration to commissioning, maintenance, and administration of the platform. 
                          <li>
                          Develop processes with Python programming to tracking new site progress and change requests. 
                          </li>
                          R language for automation – Improving reliability with reporting & efficiency in resource management.
                          <li>
                          Excellent management skills, maintain project plans and deadline. 
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                          Master's Degree in the related field with minimum 8 years experience. {" "}
                          </li>
                          <li>
                          Proven experience in an advanced level of Tableau, Power BI, Geocoding API.{" "}
                          </li>
                          <li>
                          Hands-on with Python coding and demonstrated experience in libraries such as - Pandas, NumPy, GeoPandas, OS, Pyodbc, etc.{" "}
                          </li>

                          <li>
                          Sound understanding of data science techniques and Excellent knowledge of tools such as SAP Business 
                          Objects XI, OPTIMA, Advance MS-Office, Toad, VB macros.{" "}
                          </li>
                        </ul>
                      </Modal.Body>
                      <Modal.Footer className="py-1 d-flex justify-content-center">
                        <div>
                          <Button
                            variant="outline-dark"
                            onClick={() => this.setState({ show1: false })}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>


                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show2: true })}
                    >
                      <th scope="row">3</th>
                      <td>Business Analyst</td>
                      <td>SMS21-BA-1</td>
                      <td>Closed</td>
                      <td>26/04/2021</td>
                      <td>21/05/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <Modal
                      show={this.state.show2}
                      animation={true}
                      size="lg"
                      className=" shadow-lg border"
                    >
                      <Modal.Header className="text-info text-white text-center py-1">
                        <Modal.Title className="text-center">
                          <h2>JOB DESCRIPTION</h2>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="py-0 border">
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Job Description:</h3>
                          <li>
                          Identify problems concerned with business strategy, policy, procedures, methods, and markets of the organisation seeking advice. 
                          </li>
                          <li>
                          Carry out Gap Analysis between new Business Requirements and Existing Capabilities. 
                          </li>
                          <li>
                          Determine the appropriate method of data collection and research methodology, analyse, and interpret information gained and formulate and implement recommendations and solutions. 
                          </li>
                          <li>
                          Communicate and represent complex information in easily understandable visual representations with excellent written and presentation skills.
                          </li>
                          Examine existing business models and flows of data and
                          design functional specifications and test plans for
                          new systems to meet client’s needs.
                          <li>
                          Create supporting documentation using appropriate Business Analysis Techniques.
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                          Proven Experience as a Business Analyst {" "}
                          </li>
                          <li>
                          Ability to demonstrate experience of various Business Analysis Techniques.{" "}
                          </li>
                          <li>
                          Excellent written, verbal and presentation skills.{" "}
                          </li>

                          <li>
                          Proficient in the use of Word, Excel, PowerPoint, and Visio and Salesforce experience would be a great advantage{" "}
                          </li>
                        </ul>
                      </Modal.Body>
                      <Modal.Footer className="py-1 d-flex justify-content-center">
                        <div>
                          <Button
                            variant="outline-dark"
                            onClick={() => this.setState({ show2: false })}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>


                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show3: true })}
                    >
                      <th scope="row">4</th>
                      <td>Software Tester</td>
                      <td>SMS21-ST-1</td>
                      <td>Closed</td>
                      <td>26/04/2021</td>
                      <td>21/05/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <Modal
                      show={this.state.show3}
                      animation={true}
                      size="lg"
                      className=" shadow-lg border"
                    >
                      <Modal.Header className="text-info text-white text-center py-1">
                        <Modal.Title className="text-center">
                          <h2>JOB DESCRIPTION</h2>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="py-0 border">
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Job Description:</h3>
                          <li>
                          Execute all levels of testing i.e., Functional, System, Integration, and Regression.
                          </li>
                          <li>
                          Design and develop automation scripts, test plans and test cases. 
                          </li>
                          <li>
                          Implement JUnit for different modules of Java-based web applications. 
                          </li>
                          <li>
                          Perform functional, unit and performance testing of the entire product and application. 
                          </li>
                          Use version control tools such as CVS and subversion and Provide timely solutions.
                          <li>
                          Apply quality engineering principles throughout the Agile/Scrum product lifecycle.
                          </li>
                          Work closely with clients to implement new systems.
                          <li>
                          Provide support and documentation. 
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                          6+ years' experience as a software tester.{" "}
                          </li>
                          <li>
                          Knowledge of Software development life cycle and software test life cycle.{" "}
                          </li>
                          <li>
                          Hands-on experience with automation testing tools Eclipse, Selenium and Junit.{" "}
                          </li>

                          <li>
                          Knowledge of test build tools such as Maven and Jenkins. {" "}
                          </li>
                          <li>
                          Knowledge of Java programming knowledge would be advantageous.
                          </li>
                        </ul>
                      </Modal.Body>
                      <Modal.Footer className="py-1 d-flex justify-content-center">
                        <div>
                          <Button
                            variant="outline-dark"
                            onClick={() => this.setState({ show3: false })}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>


                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show4: true })}
                    >
                      <th scope="row">5</th>
                      <td>IT Consultant</td>
                      <td>SMS21-ITC-2</td>
                      <td>Closed</td>
                      <td>03/05/2021</td>
                      <td>28/05/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <Modal
                      show={this.state.show4}
                      animation={true}
                      size="lg"
                      className=" shadow-lg border"
                    >
                      <Modal.Header className="text-info text-white text-center py-1">
                        <Modal.Title className="text-center">
                          <h2>JOB DESCRIPTION</h2>
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="py-0 border">
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Job Description:</h3>
                          <li>
                            Liaise with internal/external clients to analyse
                            business procedure, clarify client’s requirements
                            and to define the scope of existing software,
                            hardware, and network provision.
                          </li>
                          <li>
                            Undertake feasibility studies for major IT
                            developments, incorporating costs and benefits and
                            presents proposals to clients.
                          </li>
                          <li>
                            Communicate the impact of emerging technologies to
                            clients and advises upon the potential introduction
                            of such technology.
                          </li>
                          <li>
                            Provide advice and assistance in the procurement,
                            provision, delivery, installation, maintenance and
                            use of IT systems and their environments.
                          </li>
                          Examine existing business models and flows of data and
                          design functional specifications and test plans for
                          new systems to meet client’s needs.
                          <li>
                            Research, analyse, evaluate, and monitor network
                            infrastructure and performance.
                          </li>
                          Work closely with clients to implement new systems.
                          <li>
                            Effective communication skills (written and verbal)
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                            Proven experience as an IT Consultant/Architect.{" "}
                          </li>
                          <li>
                            Experience in designing, developing, and
                            implementing end to end data solutions based on
                            industry standards and best practices.{" "}
                          </li>
                          <li>
                            Bachelor's Degree in Computer Science, Information
                            Systems, or related field.{" "}
                          </li>

                          <li>
                            4+ years’ experience in the IT Infrastructure
                            management.{" "}
                          </li>
                        </ul>
                      </Modal.Body>
                      <Modal.Footer className="py-1 d-flex justify-content-center">
                        <div>
                          <Button
                            variant="outline-dark"
                            onClick={() => this.setState({ show4: false })}
                          >
                            Close
                          </Button>
                        </div>
                      </Modal.Footer>
                    </Modal>


                  </tbody>
                </table>
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewJobs;
