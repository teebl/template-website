import React, { Component } from "react";

export default class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero" style={this.props.heroStyle}>
        <img src={this.props.heroImage.src} alt="" className="heroImage" />
        <div className="heroContent">
          <div className="heroBox">
            <h1 className="heroTitle">{this.props.heroTitle}</h1>
            <h3 className="heroText">{this.props.heroText}</h3>
            <button className="callToAction">
              {this.props.callToAction.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Hero.defaultProps = {
  heroImage: {
    src: "../resources/images/coffee_hero.jpg",
    alt: "Hero Image coffee"
  },
  heroTitle: "Hero Title",
  heroText: "Here is some hero text, it is pretty basic",
  callToAction: {
    text: "Click Here",
    link: ""
  },

  heroStyle: {
    backgroundColor: "blue",
    backgroundImage: `require("resources/images/coffee_hero.jpg")`
  }
};
