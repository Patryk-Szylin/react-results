import React, { Component } from "react";
import LowAvailablity from "../LowAvailablity";

class RoomBreakdown extends Component {
  state = {};
  render() {
    return (
      <div className="room-info">
        <div className="breakdown-icon room-icon" />
        <div className="info">
          {this.props.holiday.Rooms[0].Name}{" "}
          {this.props.holiday.OutboundFlights[0].SeatsRemaining < 15 ? (
            <LowAvailablity />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default RoomBreakdown;
