import React, { Component } from "react";

const NavbarButton = props => {
  const navbarElement = props.navbarElement;

  return (
    <li key="{navbarElement.item}">
      <a href="" link="{navbarElement.link}">
        {navbarElement.item}
      </a>
    </li>
  );
};
