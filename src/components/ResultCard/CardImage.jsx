import React, { Component } from "react";

class CardImage extends Component {
  state = {};
  render() {
    return (
      <div className="card-image-container">
        <img src={this.props.image} />
      </div>
    );
  }
}

export default CardImage;
