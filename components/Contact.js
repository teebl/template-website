import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <div className="locationInfo">
          <div className="contactAddress">
            <p>4444 MacLaren Street</p>
            <p>Unit 4</p>
            <p>K1P 5M7</p>
            <p>Ottawa</p>
            <p>Ontario</p>
          </div>
          <div className="contactMethodList">
            <div className="contactMethod">
              <h3>Call Us</h3>
              <h3>(555)-555-5555</h3>
            </div>
          </div>
        </div>
        <div className="locationInfo">
          <div className="contactAddress">
            <p>4444 MacLaren Street</p>
            <p>Unit 4</p>
            <p>K1P 5M7</p>
            <p>Ottawa</p>
            <p>Ontario</p>
          </div>
          <div className="contactMethodList">
            <div className="contactMethod">
              <h3>Call Us</h3>
              <h3>(555)-555-5555</h3>
            </div>
            <div className="contactMethod">
              <h3>Email</h3>
              <h3>email.add@internet.com</h3>
            </div>
            <div className="contactMethod">
              <h3>Call Us</h3>
              <h3>(555)-555-5555</h3>
            </div>
            <div className="contactMethod">
              <h3>Call Us</h3>
              <h3>(555)-555-5555</h3>
            </div>
            <div className="contactMethod">
              <h3>Call Us</h3>
              <h3>(555)-555-5555</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
