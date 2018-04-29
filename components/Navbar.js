import React, { Component } from "react";
import NavbarButton from "./NavbarButton";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const NavbarElements = this.props.NavbarElements;

    return navbarElements.map(i => {
      <NavbarButton navbarElement={i} />;
    });
  }
}
