import { div } from "prelude-ls";
import React, { Component } from "react";

import Zoom from "react-reveal/Zoom";
import "./TextContainer.css";

export class TextContainer extends Component {
  render() {
    return (
      <Zoom>
      <div className="container">
        <h2>{this.props.text}</h2>
      </div>
      </Zoom>
    );
  }
}

export default TextContainer;
