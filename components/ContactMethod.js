import React from "react";
import Icon from "./Icon";

const ContactMethod = props => {
  return (
    <div className="contactMethod">
      <h3>
        <Icon type={props.method.type} link={props.method.link} size="20" />{" "}
        {props.method.id}
      </h3>
    </div>
  );
};

export default ContactMethod;
