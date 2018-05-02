import React from "react";

const Address = props => {
  const addressParsed = props.address.map(i => {
    return <p>{i}</p>;
  });
  console.log(props.address[0]);
  return <div className="address">{addressParsed}</div>;
};

export default Address;
