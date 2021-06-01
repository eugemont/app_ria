import React, { Component } from "react";
import CaloriesPanel from "../components/calories/CaloriesPanel";
import InputBoard from "../components/InputBoard";

import "./Page.module.css";

export class Calories extends Component {
  render() {
    return (
      <div className="page-style">
        <InputBoard></InputBoard>
        <div className="page-section">
          <CaloriesPanel></CaloriesPanel>
          <CaloriesPanel></CaloriesPanel>
          <CaloriesPanel></CaloriesPanel>
          <CaloriesPanel></CaloriesPanel>
        </div>
      </div>
    );
  }
}

export default Calories;
