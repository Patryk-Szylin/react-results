import React, { Component } from "react";

class BoardBreakdown extends Component {
  state = {};
  render() {
    return (
      <div className="board-info">
        <div className="breakdown-icon board-icon" />
        <div className="info">{this.props.holiday.BoardBasis.Name}</div>
      </div>
    );
  }
}

export default BoardBreakdown;
