
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
                            {  /*  <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Job Title</th>
                      <th scope="col">Job Code</th>
                      <th scope="col">Status</th>
                      <th scope="col">Posted Date</th>
                      <th scope="col">Closed Date</th>
                      <th scope="col">Sponsorship Available?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      style={{ cursor: "hand" }}
                      onClick={() => this.setState({ show: true })}
                    >
                      <th scope="row">1</th>
                      <td>IT Consultant</td>
                      <td>SMS21-ITC-4</td>
                      <td>Open</td>
                      <td>26/07/2021</td>
                      <td>20/08/2021</td>
                      <td>Yes</td>
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
                            Bachelor's Degree in the related field.{" "}
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
                      <td>Data Scientist</td>
                      <td>SMS21-DS-1</td>
                      <td>Open</td>
                      <td>25/07/2021</td>
                      <td>14/08/2021</td>
                      <td>Yes</td>
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
                            The design, build and deployment of AI and ML models by collecting data 
                            and requirements.
                          </li>
                          <li>
                            Working across a range of stakeholders, including product, industry SMEs 
                            and software developers to produce consumable model outputs.
                          </li>
                          <li>
                            Providing direction on the Machine Learning (ML) engineering and 
                            operational activities and set-up needed to both productionise 
                            produced models and optimise data pipelines and cloud consumption.
                          </li>
                          <li>
                            Working with the Artificial Intelligence (AI) Architect to define 
                            repeatable architectural patterns that can be used across the 
                            enterprise with an empathise on the ability to scale as model 
                            complexity and data inputs growth over time.
                          </li>
                            Ensuring data is collected and analysed that enables models and 
                            associated products to be evolved based on the understanding 
                            of customer and commercial impact.
                          <li>
                            Helping to define MLOPs procedures and integrate with DevOps 
                            teams to produce MLOPs functionality.
                          </li>
                            Ensuring productionised models can be handed over to operational teams.
                          <li>
                            Ensuring that solutions meet current requirements and can 
                            evolve to support future needs, minimising disruption.
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                            Demonstrated ability to adapt to new technologies 
                            and learn quickly.{" "}
                          </li>
                          <li>
                            Proven experience in an advanced level of Tableau,
                            Power BI, Geocoding API.{" "}
                          </li>
                          <li>
                            Hands-on with Python coding and demonstrated
                            experience in libraries such as - Pandas, NumPy,
                            Tensorflow, Keras, OS, Pyodbc, etc.{" "}
                          </li>
                          <li>
                            Sound understanding of data science techniques. 
                            Deep Understanding of Machine Learning and AI techniques.{" "}
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
                      <td>Financial Analyst</td>
                      <td>SMS21-FA-1</td>
                      <td>Open</td>
                      <td>23/07/2021</td>
                      <td>09/08/2021</td>
                      <td>Yes</td>
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
                            Work to understand the current financial view, providing 
                            a breakdown showing budget, current spend, what it is being 
                            spent on (Resources, areas of work, tools etc) and the 
                            value it is bringing. Perform Revenue and Volume variance analysis.
                          </li>
                          <li>
                            Perform product-/client-analytics to help to generating insights 
                            that shape both business strategy and organic growth initiatives.
                          </li>
                          <li>
                            Regularly update and support in liaising with Product Management, 
                            Sales, Business leadership. Support quarterly budget updates and 
                            monthly revenue estimates.
                          </li>
                          <li>
                            Support the team with data/analysis requests and in extracting 
                            data from the finance database.
                          </li>
                            Provide Day to Day support to the business for all ad hoc 
                            analysis requests.
                          <li>
                            Opportunity to work across the finance function and to assist 
                            in financial accounting on an ad hoc basis.
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                            Three to five years relevant experience in commercial 
                            finance/analytics{" "}
                          </li>
                          <li>
                            Experience in working with large/complex datasets and 
                            with a multi-product setup{" "}
                          </li>
                          <li>
                            Excellent written, verbal and presentation skills.{" "}
                          </li>
                          <li>
                            Experience using business intelligence and data visualization software 
                            such as Tableau.{" "}
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
                      <td>SMS21-ST-2</td>
                      <td>Open</td>
                      <td>26/07/2021</td>
                      <td>20/08/2021</td>
                      <td>Yes</td>
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
                            Execute all levels of testing i.e., Functional,
                            System, Integration, and Regression.
                          </li>
                          <li>
                            Design and develop automation scripts, test plans
                            and test cases.
                          </li>
                          <li>
                            Implement JUnit for different modules of Java-based
                            web applications.
                          </li>
                          <li>
                            Perform functional, unit and performance testing of
                            the entire product and application.
                          </li>
                            Use version control tools such as CVS and subversion
                            and Provide timely solutions.
                          <li>
                            Apply quality engineering principles throughout the
                            Agile/Scrum product lifecycle.
                          </li>
                          <li>
                            Work closely with clients to implement new systems.
                            Provide support and documentation.
                          </li>
                        </ul>
                        <ul
                          class="entry-content"
                          style={{ listStyleType: "unset" }}
                        >
                          <h3>Skills and Qualifications:</h3>
                          <li>
                            4+ years' experience as a software tester.{" "}
                          </li>
                          <li>
                            Knowledge of Software development life cycle and
                            software test life cycle.{" "}
                          </li>
                          <li>
                            Hands-on experience with automation testing tools
                            Eclipse, Selenium and Junit.{" "}
                          </li>
                          <li>
                            Knowledge of test build tools such as Maven and
                            Jenkins.{" "}
                          </li>
                          <li>
                            Knowledge of Java programming knowledge would be
                            advantageous.
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
                      <td>Telecommunications Consultant</td>
                      <td>SMS21-TC-1</td>
                      <td>Open</td>
                      <td>23/07/2021</td>
                      <td>07/08/2021</td>
                      <td>Yes</td>
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
                            undertake research and advise on all aspects of telecommunications 
                            equipment, radar, telemetry and remote control systems, 
                            data processing equipment, microwaves and other electronic equipment;
                          </li>
                          <li>
                            determine and specify appropriate production and/or 
                            installation methods and quality and safety standards;
                          </li>
                          <li>
                            organise and establish control systems to monitor 
                            performance and evaluate designs;
                          </li>
                          <li>
                            test, diagnose faults and undertakes repair of electronic equipment.
                            Optimizes systems ensuring minimal cost and simplification in 
                            compliance with the required performance;
                          </li>
                            Prepare technical documentation for systems and telecommunication 
                            requisitions and perform technical evaluations.
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
                            Proven experience in designing, developing, and
                            implementing solutions based on
                            industry standards and best practices.{" "}
                          </li>
                          <li>
                            Bachelor's Degree in the related field.{" "}
                          </li>
                          <li>
                            4+ years’ relevant experience.{" "}
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
                </table>*/}
              </div>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewJobs;
