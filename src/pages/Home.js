import React, { Component } from "react";
import ImageContainer from "../components/ImageContainer";
import TextContainer from "../components/TextContainer";
import Globals from "../Globals";

export class home extends Component {
  render() {
    return (
      <React.StrictMode>
        <ImageContainer link="https://media.istockphoto.com/photos/blue-abstract-background-or-texture-picture-id1138395421?k=6&m=1138395421&s=612x612&w=0&h=bJ1SRWujCgg3QWzkGPgaRiArNYohPl7-Wc4p_Fa_cyA="></ImageContainer>
        <TextContainer text={Globals.nueva}></TextContainer>
      </React.StrictMode>
    );
  }
}

export default home;
