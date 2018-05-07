import React, { Component } from "react";
import NavbarButton from "./NavbarButton";
import Icon from "./Icon";
import ICONS from "../resources/ICONS";

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
      <div className="navbarSpacer">
        <div className="navbar">
          <svg
            height="40"
            width="40"
            viewBox="0 0 123 82"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M95,60c-2,3-6,7-11,7c-6,0-12-3-12-10c0-10,15-14,27-14v3c0,6-1,10-4,14M121,68v-41c0-9-2-15-7-20c-5-4-13-7-24-7c-11,0-20,3-28,7c6,5,10,12,12,21c0-8,5-11,13-11c9,0,11,7,11,14h1c-25,1-49,6-48,28c0,16,15,23,25,23c1,0,17,1,24-11c0,3,0,7,1,9h22c-2-4-2-8-2-12"
              fill="#49ac44"
            />
            <path
              d="M51,59v-4c-1,5-5,8-11,8c-11,0-15-8-15-23c0-15,4-23,15-23c7,0,12,4,12,11h22c-2-18-17-28-35-28c-24,0-39,17-39,42c0,23,14,40,38,40c7,0,15-2,21-6c-4-4-8-9-8-17"
              fill="#0084ca"
            />
          </svg>
          <div className="collapseButton" onClick={this.dropdownExpand}>
            <Icon type="BARS" size="50" />
          </div>
          <div className={"navbarButtons " + dropdownClass}>{navItems}</div>
        </div>
      </div>
    );
  }
}
