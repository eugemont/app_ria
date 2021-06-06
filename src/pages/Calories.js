import React, { Component } from "react";
import CaloriesPanel from "../components/calories/CaloriesPanel";
import InputBoard from "../components/InputBoard";

import "./Page.module.css";

export class Calories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      foodList: [
        <CaloriesPanel></CaloriesPanel>,
        <CaloriesPanel></CaloriesPanel>,
        <CaloriesPanel></CaloriesPanel>,
      ],
    };
  }
  handleCallback = (childData) => {
    this.setState({ data: childData });
  };
  handleOnClick = (childData) => {
    this.setState({ data: childData });
  };

  render() {
    return (
      <div className="page-style">
        <InputBoard
          parentCallback={this.handleCallback}
          onClickCallback={this.state.handleOnClick}
        ></InputBoard>
        <div className="page-section scrollable">{this.state.foodList}</div>
      </div>
    );
  }
}

export default Calories;
