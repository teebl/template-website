import React, { Component } from "react";
import Navbar from "../components/Navbar";
import bars from "../resources/bars";

export default class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: bars,
      navbarElements: [
        { item: "NavLink1", link: "linkTest1" },
        { item: "NavLink2", link: "linkTest2" },
        { item: "NavLink3", link: "linkTest3" },
        { item: "NavLink4", link: "linkTest4" }
      ],
      blocks: [
        {
          type: "",
          title: "",
          image: "",
          text: ""
        }
      ]
    };
  }

  // componentDidMount() {
  // 	//fetch from an API here, it can go into state.
  // 	//redux fetching?
  // }

  render() {
    return (
      <Navbar
        navbarElements={this.state.navbarElements}
        logo={this.state.logo}
      />
    );
  }
}
