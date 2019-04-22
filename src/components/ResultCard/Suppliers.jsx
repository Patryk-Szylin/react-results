import React, { Component } from "react";
import SupplierRating from "./SupplierRating";
import TripAdvisorRating from "./TripAdvisorRating";
import CardSeperator from "./CardSeperator";
class Suppliers extends Component {
  state = {};
  render() {
    var supplier = this.props.brand.Supplier ? this.props.brand.Supplier : null;

    return (
      <div className="supplier-container">
        <div className="suppliers">
          <div className={"supplier-logo " + supplier.Code} />
        </div>
        <CardSeperator />
        <div className="ratings">
          <SupplierRating rating={this.props.accommodation.StarRating} />
          <TripAdvisorRating review={this.props.review} />
        </div>
      </div>
    );
  }
}

export default Suppliers;
