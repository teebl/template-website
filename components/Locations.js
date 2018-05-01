import React, { Component } from "react";

export default class Locations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact">
        <div className="locationInfo">
          <div className="contactAddress">
            <p>4070 MacLaren Street</p>
            <p>Unit 7</p>
            <p>K1P 5M7</p>
            <p>Ottawa</p>
            <p>Ontario</p>
          </div>
          <div className="contactMethod">
            <h3>Call Us</h3>
            <h3>(555)-555-5555</h3>
          </div>
        </div>
      </div>
    );
  }
}
