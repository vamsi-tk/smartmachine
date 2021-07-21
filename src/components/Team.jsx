import React, { Component } from "react";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Our Leadership Team</h2>
            <p>
              Our team who are leading the change across industries, functions, platforms and partnerships. 
              At the forefront of reinvention, they lead teams across the globe to prepare businesses to reshape their future and 
              emerge stronger, prepared for whatever lies ahead
            </p>
          </div>
          {/* <div id="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                    <div className="thumbnail" >
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h3>{d.name}</h3>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div> */}
        </div>
      </div>
    );
  }
}

export default Team;
