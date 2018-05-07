import React from "react";
import Address from "./Address";
import ContactMethod from "./ContactMethod";

const LocationInfo = props => {
  return (
    <div className="locationInfo">
      <img
        className="locationImage"
        src="/resources/images/cafe_exterior_1.jpg"
      />

      <Address address={props.locationInfo.address} />
      <div className="contactMethodsList">
        {props.locationInfo.contactMethods.map(i => {
          return <ContactMethod method={i} />;
        })}
      </div>
    </div>
  );
};

export default LocationInfo;
