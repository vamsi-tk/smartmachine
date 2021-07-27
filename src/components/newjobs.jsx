import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export class NewJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      show1: false,
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
                            onClick={() => this.setState({ show1: false })}
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
                      <th scope="row">3</th>
                      <td>Business Analyst</td>
                      <td>SMS21-BA-1</td>
                      <td>Closed</td>
                      <td>26/04/2021</td>
                      <td>21/05/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show: true })}
                    >
                      <th scope="row">4</th>
                      <td>Software Tester</td>
                      <td>SMS21-ST-1</td>
                      <td>Closed</td>
                      <td>26/04/2021</td>
                      <td>21/05/2021</td>
                      <td>Sponsorship Avialable</td>
                    </tr>
                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show: true })}
                    >
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
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewJobs;
