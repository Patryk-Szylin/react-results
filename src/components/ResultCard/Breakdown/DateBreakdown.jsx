import React, { Component } from "react";
import moment from "moment";

class DateBreakdown extends Component {
  state = {};
  render() {
    const { holiday } = this.props;
    var departureDate = moment(holiday.OutboundFlights[0].DepartureTime).format(
      "DD MMM YYYY"
    );
    return (
      <div className="date-info">
        <div className="breakdown-icon night-icon" />
        <div className="info">
          {departureDate} - {holiday.Duration} Nights
        </div>
      </div>
    );
  }
}

export default DateBreakdown;
