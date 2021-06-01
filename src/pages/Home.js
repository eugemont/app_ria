import React, { Component } from "react";

import ImageContainer from "../components/ImageContainer";
import TextContainer from "../components/TextContainer";
import Background from "../components/Background";
import logo from "../assets/CaloRIA.png";
import Globals from "../Globals";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Zoom";

export class home extends Component {
  render() {
    return (
      <React.StrictMode>
        <Background />
        <Zoom>
          <ImageContainer link={logo}></ImageContainer>
        </Zoom>
        <TextContainer text={Globals.textHome}></TextContainer>
        <br></br>
        <br></br>
        <Fade left>
          <h1>React Reveal</h1>
        </Fade>
      </React.StrictMode>
    );
  }
}

export default home;
