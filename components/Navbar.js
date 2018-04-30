import React, { Component } from "react";
import NavbarButton from "./NavbarButton";
import Icon from "./Icon";
import bars from "../resources/bars";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownBool: 0
    };

    this.dropdownExpand = this.dropdownExpand.bind(this);
  }

  dropdownExpand() {
    this.setState({ dropdownBool: !this.state.dropdownBool });
  }

  render() {
    const dropdownClass = this.state.dropdownBool
      ? "navbarButtonsDropdown"
      : "";
    const navItems = this.props.navbarElements.map(i => (
      <NavbarButton navbarElement={i} />
    ));

    return (
      <div className="navbar">
        <Icon icon={this.props.logo} />
        <div className="collapseButton" onClick={this.dropdownExpand}>
          <Icon icon={bars} />
        </div>
        <div className={"navbarButtons " + dropdownClass}>{navItems}</div>
      </div>
    );
  }
}
