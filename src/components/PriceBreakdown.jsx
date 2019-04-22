import React, { Component } from "react";

class PriceBreakdown extends Component {
  state = {};
  render() {
    const { Price } = this.props.holiday;
    return (
      <div className="price-breakdown">
        <div className="price-container">
          <div>Price from</div>
          <div className="current-price">
            £{Price.PerPerson}
            <span className="was-price">£{Price.PerPersonWasPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceBreakdown;
