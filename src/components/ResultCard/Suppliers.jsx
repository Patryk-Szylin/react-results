import React, { Component } from "react";
import SupplierRating from "./SupplierRating";
import TripAdvisorRating from "./TripAdvisorRating";
class Suppliers extends Component {
  state = {};
  render() {
    return (
      <div className="supplier-container">
        <div className="suppliers">
          <div>thomas Cook</div>
          <div>Manos</div>
        </div>
        <div className="ratings">
          <SupplierRating />
          <TripAdvisorRating />
        </div>
      </div>
    );
  }
}

export default Suppliers;
