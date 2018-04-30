import React, { Component } from "react";
import "../styles/App.scss";
import NavbarContainer from "./NavbarContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <p>Hello, word!</p>
      </div>
    );
  }
}
