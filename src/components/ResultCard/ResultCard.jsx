import React, { Component } from "react";
import ResultCardTitle from "./Title";
import Suppliers from "./Suppliers";
import CardImage from "./CardImage";
import ShortlistButton from "./ShortlistButton";
class ResultCard extends Component {
  state = {};
  render() {
    return (
      <div className="result-card row">
        <div className="col-lg-6 card-image">
          <CardImage />
        </div>
        <div className="col-lg-6 card-content">
          <ResultCardTitle />
          <Suppliers />
          <ShortlistButton />
        </div>
      </div>
    );
  }
}

export default ResultCard;
