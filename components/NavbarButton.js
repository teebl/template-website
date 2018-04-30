import React, { Component } from "react";

const NavbarButton = props => {
  const navbarElement = props.navbarElement;

  return (
    <div className="navbarButton">
      <a href="" link="{navbarElement.link}">
        {navbarElement.item}
      </a>
    </div>
  );
};

export default NavbarButton;
