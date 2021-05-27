import { div } from "prelude-ls";
import React, { Component } from "react";
import "./TextContainer.css";

export class TextContainer extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.text}</h1>
      </div>
    );
  }
}

export default TextContainer;
