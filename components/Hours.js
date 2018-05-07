import React, { Component } from "react";

export default class Hours extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const list = this.props.hoursDays.map(day => (
      <div className="hoursDay">{day}</div>
    ));

    return (
      <div className="hours">
        <div className="hoursTitle">
          <h2>{this.props.hoursTitle}</h2>
        </div>
        {list}
        <div className="hoursExtra">{this.props.hoursExtra}</div>
      </div>
    );
  }
}

Hours.defaultProps = {
  hoursTitle: "Hours of Operation",
  hoursDays: [
    "Monday: 7:00am - 8:00pm",
    "Tuesday: 7:00am - 8:00pm",
    "Wednesday: 7:00am - 8:00pm",
    "Thursday: 7:00am - 8:00pm",
    "Friday: 7:00am - 8:00pm",
    "Saturday & Sunday: 7:00am - 8:00pm"
  ],
  hoursExtra: "Extra text (such as holiday hours) go here"
};
