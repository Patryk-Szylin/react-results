import React, { Component } from "react";

class PriceBreakdown extends Component {
  state = {};
  render() {
    return (
      <div className="price-breakdown">
        <div className="price-container">
          <div>Price from</div>
          <div className="current-price">
            £150pp <span className="was-price">£239pp</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceBreakdown;
