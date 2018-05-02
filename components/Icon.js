import React from "react";
import { ICONS } from "../resources/ICONS.js";

function Icon(props) {
  if (props.link !== "") {
    return (
      <a className="Icon" href={props.link}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.size}
          height={props.size}
          viewBox="0 0 512 512"
        >
          <path d={ICONS.EMAIL} />
        </svg>
      </a>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 512 512"
      >
        <path d={ICONS.EMAIL} />
      </svg>
    );
  }
}

Icon.defaultProps = {
  size: "60",
  link: ""
};

export default Icon;
