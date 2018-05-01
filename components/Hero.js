import React, { Component } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero" style={this.props.heroStyle}>
        <h1 className="heroTitle">Hero Image</h1>
        <h2 className="heroText">
          {" "}
          Here is some hero text, it is pretty basic
        </h2>
        <button className="callToAction">Click Here</button>
      </div>
    );
  }
}

// backgroundImage: `url(require("images/img.svg"))`

Hero.defaultProps = {
  heroStyle: {
    backgroundColor: "blue"
  }
};
