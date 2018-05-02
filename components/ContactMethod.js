import React from "react";
import Icon from "./Icon";

const ContactMethod = props => {
  return (
    <div className="contactMethod">
      <Icon type={props.method.type} />
      <h3>{props.method.type}</h3>
      <h3>{props.method.id}</h3>
    </div>
  );
};

export default ContactMethod;
