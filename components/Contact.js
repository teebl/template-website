import React, { Component } from "react";
import Address from "./Address";
import LocationInfo from "./LocationInfo";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const locations = this.props.locations.map(i => {
      return <LocationInfo locationInfo={i} />;
    });

    return (
      <div className="contact">
        <h2>Contact</h2>
        {locations}
      </div>
    );
  }
}

Contact.defaultProps = {
  locations: [
    {
      address: [
        "4444 MacLaren Street",
        "Unit 4",
        "K1P 5M7",
        "Ottawa, ON, Canada"
      ],
      contactMethods: [
        { type: "PHONE", id: "(555)-555-5555" },
        { type: "EMAIL", id: "sampleemail@website.com" }
      ]
    },
    {
      address: [
        "4444 MacLaren Street",
        "Unit 4",
        "K1P 5M7",
        "Ottawa, ON, Canada"
      ],
      contactMethods: [
        { type: "PHONE", id: "(555)-555-5555" },
        {
          type: "EMAIL",
          id: "sampleemail@website.com",
          link: "mailto:sampleemail@website.com"
        }
      ]
    }
  ]
};
