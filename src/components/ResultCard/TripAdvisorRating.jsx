import React, { Component } from "react";

class TripAdvisorRating extends Component {
  state = {};
  render() {
    return (
      <div className="trip-advisor-rating">
        <div className="trip-advisor-logo" />
        <div className="trip-advisor full" />
        <div className="trip-advisor full" />
        <div className="trip-advisor full" />
        <div className="trip-advisor half" />
        <div className="trip-advisor empty" />
        <span>(314)</span>
      </div>
    );
  }
}

export default TripAdvisorRating;
