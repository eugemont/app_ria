import React, { Component } from "react";
import Caracteristic from "./Caracteristic";
import "./CaloriesPanel.module.css";

export class CaloriesPanel extends Component {
  render() {
    return (
      <div className="card ">
        <div>
          <section className="food-name">Rice</section>
          <section className="charts_orb content">
            <div className="row">
              <Caracteristic className="col-sm " number={1000} />
              <Caracteristic className="col-sm" number={54} />
              <Caracteristic className="col-sm" number={54} />
            </div>
            <div className="row">
              <Caracteristic className="col-sm " number={20} />
              <Caracteristic className="col-sm " number={4234} />
              <Caracteristic className="col-sm " number={54} />
            </div>
            <div className="row row-md-offset-50">
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
