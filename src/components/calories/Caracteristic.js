import React, { Component } from "react";
import "./Caracteristic.module.css";
import * as $ from "jquery";
import CountUp from "react-countup";

export class Caracteristic extends Component {
  render() {
    let numbDecimal = 0;
    if (this.props.number % 1 != 0) {
      numbDecimal = 1;
    }

    return (
      <article className="orb col">
        <div className="orb_graphic">
          <svg>
            <circle className="fill"></circle>
            <circle className="progress"></circle>
          </svg>
          <CountUp
            className="orb_value count"
            start={0}
            end={this.props.number}
            duration={2}
            separator=""
            decimals={numbDecimal}
          />
        </div>
        <div className="orb_label">{this.props.dataname}</div>
      </article>
    );
  }
}

export default Caracteristic;
