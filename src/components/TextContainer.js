import { div } from "prelude-ls";
import React, { Component } from "react";
import "./TextContainer.css";

export class TextContainer extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.text}</h2>
      </div>
    );
  }
}

export default TextContainer;
