import React, { Component } from "react";
import "./FoodText.module.scss";

export class FoodText extends Component {
  render() {
    return (
      <div>
        <div className="grid">
          <h1 className="heading heading--stroke heading--shadow">Hello</h1>
          <h1 className="heading heading--stroke-shadow">Hello</h1>
          <h1 className="heading heading--stroke heading--halftone">Hello</h1>
          <h1 className="heading heading--stroke heading--halftone heading--halftone-color">
            Hello
          </h1>
        </div>
      </div>
    );
  }
}

export default FoodText;
