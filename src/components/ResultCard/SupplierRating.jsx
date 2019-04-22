import React, { Component } from "react";

class SupplierRating extends Component {
  state = {};
  render() {
    let starRating = [];

    for (let i = 0; i < this.props.rating; i++) {
      starRating.push(<div key={i} className="starRating lit" />);
    }

    for (let j = 0; j < 5 - this.props.rating; j++) {
      starRating.push(<div key={j + 10} className="starRating" />);
    }
    return <div className="supplier-rating">{starRating}</div>;
  }
}

export default SupplierRating;
