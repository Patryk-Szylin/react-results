import React, { Component } from "react";
import * as ReactBootstrap from "react-bootstrap";

class ShortlistButton extends Component {
  state = {};
  render() {
    return (
      <ReactBootstrap.Button className="shortlist-button" variant="success">
        Shortlist
      </ReactBootstrap.Button>
    );
  }
}

export default ShortlistButton;
