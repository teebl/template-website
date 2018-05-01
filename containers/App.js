import React, { Component } from "react";
import "../styles/App.scss";
import NavbarContainer from "./NavbarContainer";
import Hero from "../components/Hero";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <Hero />
      </div>
    );
  }
}
