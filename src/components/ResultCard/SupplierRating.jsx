import React, { Component } from "react";

class SupplierRating extends Component {
  state = {};
  render() {
    return (
      <div className="supplier-rating">
        <div className="starRating lit" />
        <div className="starRating lit" />
        <div className="starRating lit" />
        <div className="starRating lit" />
        <div className="starRating" />
      </div>
    );
  }
}

export default SupplierRating;
