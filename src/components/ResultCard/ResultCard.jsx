import React, { Component } from "react";
import ResultCardTitle from "./Title";
import Suppliers from "./Suppliers";
import CardImage from "./CardImage";
import ShortlistButton from "./ShortlistButton";
import DateBreakdown from "./Breakdown/DateBreakdown";
import CardSeperator from "./CardSeperator";
import FlightBreakdown from "./Breakdown/FlightBreakdown";
import BoardBreakdown from "./Breakdown/BoardBreakdown";
import RoomBreakdown from "./Breakdown/RoomBreakdown";
import PriceBreakdown from "../PriceBreakdown";
import CTAButton from "../CTAButton";

class ResultCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

  componentWillMount() {
    this.setState({ items: this.props.items });
  }

  render() {
    return (
      <div className="result-card row">
        <div className="col-lg-6 card-image">
          <CardImage />
        </div>
        <div className="col-lg-6 card-content">
          <ResultCardTitle />
          <Suppliers />
          <CardSeperator />
          <ShortlistButton />
          <div className="result-breakdown">
            <DateBreakdown />
            <FlightBreakdown />
            <BoardBreakdown />
            <RoomBreakdown />
          </div>
          <CardSeperator />
          <PriceBreakdown />
          <CTAButton />
        </div>
      </div>
    );
  }
}

export default ResultCard;
