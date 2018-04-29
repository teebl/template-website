import React, { Component } from "react";
import "../styles/App.scss";
import NavbarContainer from "./NavbarContainer";

export default class App extends Component {
  render() {
    return (
      <div class="App">
        <NavbarContainer />
        <p>Hello, world!</p>
      </div>
    );
  }
}
