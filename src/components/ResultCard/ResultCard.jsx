import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";
import Title from "./Title";
import Suppliers from "./Suppliers";

class ResultCard extends Component {
  state = {};
  render() {
    return (
      <div className="result-card">
        <Title />
        <div className="supplier-container">
          <Suppliers />
          <ReactBootstrap.Button className="shortlist" variant="success">
            Shortlist
          </ReactBootstrap.Button>
        </div>
      </div>
    );
  }
}

export default ResultCard;
