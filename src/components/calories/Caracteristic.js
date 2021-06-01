import React, { Component } from "react";
import "./Caracteristic.module.css";
import * as $ from "jquery";
import CountUp from "react-countup";

export class Caracteristic extends Component {
  render() {
    return (
      <article className="orb">
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
          />
        </div>
        <div className="orb_label">Calorias</div>
      </article>
    );
  }
}

export default Caracteristic;
