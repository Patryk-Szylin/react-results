import React, { Component } from "react";
import Title from "./Title";
import Suppliers from "./Suppliers";

class ResultCard extends Component {
  state = {};
  render() {
    return (
      <div className="result-card">
        <Title />
        <Suppliers />
      </div>
    );
  }
}

export default ResultCard;
