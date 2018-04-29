import React, { Component } from "react";
import Navbar from "../components/Navbar";

export default class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarElements: [
        { item: "Test1", link: "linkTest1" },
        { item: "Test1", link: "linkTest1" },
        { item: "Test1", link: "linkTest1" },
        { item: "Test1", link: "linkTest1" }
      ]
    };
  }

  // componentDidMount() {
  // 	//fetch from an API here, it can go into state.
  // 	//redux fetching?
  // }
  render() {
    return <Navbar navbarElements={this.state.navbarElements} />;
  }
}
