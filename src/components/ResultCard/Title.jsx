import React, { Component } from "react";

class ResultCardTitle extends Component {
  render() {
    return (
      <div className="cardHeader">
        <div className="title">{this.props.accommodation.Name}</div>
        <div className="subtitle">{this.props.destination.DestinationName}</div>
      </div>
    );
  }
}

export default ResultCardTitle;
