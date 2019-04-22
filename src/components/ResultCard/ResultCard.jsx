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
  render() {
    const { holiday } = this.props;
    console.log(holiday, "Holiday");
    return (
      <div className="result-card row">
        <div className="col-lg-6 card-image">
          <CardImage image={holiday.Accommodation.Image} />
        </div>
        <div className="col-lg-6 card-content">
          <ResultCardTitle
            accommodation={holiday.Accommodation}
            destination={holiday.Destination}
          />
          <Suppliers
            brand={holiday.Brand}
            review={holiday.Review}
            accommodation={holiday.Accommodation}
          />
          <CardSeperator />
          <ShortlistButton />
          <div className="result-breakdown">
            <DateBreakdown holiday={holiday} />
            <FlightBreakdown holiday={holiday} />
            <BoardBreakdown holiday={holiday} />
            <RoomBreakdown holiday={holiday} />
          </div>
          <CardSeperator />
          <PriceBreakdown holiday={holiday} />
          <CTAButton />
        </div>
      </div>
    );
  }
}

export default ResultCard;
