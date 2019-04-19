import React, { Component } from "react";
import LowAvailablity from "../LowAvailablity";

class RoomBreakdown extends Component {
  state = {};
  render() {
    return (
      <div className="room-info">
        <div className="breakdown-icon room-icon" />
        <div className="info">
          Studio <LowAvailablity />
        </div>
      </div>
    );
  }
}

export default RoomBreakdown;
