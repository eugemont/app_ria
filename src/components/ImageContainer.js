import React, { Component } from "react";

import Zoom from "react-reveal/Zoom";
import "./ImageContainer.css";

export class imageContainer extends Component {
  render() {
    if (true) {
      return <Zoom>
                <img className="logo" src={this.props.link}></img>
            </Zoom>;
    }
  }
}

export default imageContainer;
