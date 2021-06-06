import React, { Component } from "react";
import Caracteristic from "./Caracteristic";
import "./CaloriesPanel.css";

export class CaloriesPanel extends Component {
  render() {
    return (
      <div className="card ">
        <div>
          <section className="food-name">Rice</section>
          <section className="charts_orb">
            <div class="row">
              <Caracteristic number={1000} />
              <Caracteristic number={54} />
              <Caracteristic number={54} />
            </div>
            <div class="row">
              <Caracteristic className="col-sm " number={54} />
              <Caracteristic className="col-sm " number={54} />
              <Caracteristic className="col-sm " number={54} />
            </div>
            <div class="row">
              <Caracteristic className="col-sm " number={54} />
              <Caracteristic className="col-sm " number={54} />
              <Caracteristic className="col-sm " number={54} />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default CaloriesPanel;
