import React, { Component } from "react";

class FlightBreakdown extends Component {
  state = {};
  render() {
    return (
      <div className="flight-info">
        <div className="breakdown-icon flight-icon" />
        <div className="info">
          {this.props.holiday.OutboundFlights[0].DepartureAirport.Name} - Flight
          Details
        </div>
      </div>
    );
  }
}

export default FlightBreakdown;
