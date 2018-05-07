import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = this.props.about.text.map(i => <p>{i}</p>);
    return (
      <div className="about">
        <h2> About</h2>
        <img src={this.props.about.image} />
        {text}
      </div>
    );
  }
}

About.defaultProps = {
  about: {
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu sem tortor. Nunc lobortis mauris nec dui sodales ornare at at tortor. Praesent feugiat lobortis dignissim. Morbi consequat, dolor in dapibus vulputate, est sem venenatis ligula, ac viverra risus lacus consectetur felis. Quisque cursus ac magna at porta. Phasellus vel faucibus orci. Proin ut urna vel quam eleifend gravida. Duis erat orci, accumsan sed nisi at, facilisis maximus metus. Donec iaculis, dolor in sollicitudin placerat, ante enim maximus justo, ac placerat leo nibh at ex. Proin finibus consectetur scelerisque.",
      "Vestibulum finibus leo sed felis lobortis venenatis. Sed vel cursus enim. In nec nulla ligula. Etiam in dolor mollis turpis mattis placerat. Quisque efficitur diam in magna elementum, sit amet iaculis elit porta. In luctus, urna sed malesuada finibus, justo lacus posuere elit, sed tristique ligula massa eget orci. Morbi consequat sed ligula vitae cursus. Suspendisse rutrum aliquet nulla, quis facilisis massa ultrices mattis. Suspendisse congue, arcu ac tempor aliquam, libero elit vulputate lectus, sed mattis ex augue eget odio. Etiam vitae erat nisi. Mauris sit amet mi vitae elit ullamcorper aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ut erat risus.",
      "Nulla suscipit orci sed enim gravida, nec vestibulum eros sollicitudin. Nunc tincidunt dolor et nulla fringilla eleifend. Sed eu sodales lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vel nisl vitae sapien porta suscipit non ut dolor. Donec dictum dui ac mauris pulvinar, sed finibus elit lacinia. Suspendisse blandit urna id purus aliquet consequat. Phasellus elementum, ex id feugiat tempor, turpis tellus euismod ipsum, quis vulputate metus justo ac diam. Fusce sit amet nibh pharetra, rutrum quam ac, condimentum magna. Ut a erat vel felis efficitur pellentesque. Integer vestibulum vulputate porta. Aenean rhoncus luctus tellus quis molestie."
    ],
    image: "#"
  }
};
