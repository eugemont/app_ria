import React, { Component } from "react";

import ImageContainer from "../components/ImageContainer";
import TextContainer from "../components/TextContainer";
import Background from "../components/Background";
import TextImgL from "../components/TextImgL";
import TextImgR from "../components/TextImgR";
import logo from "../assets/CaloRIA.png";
import foto1 from "../assets/desayuno.png";
import foto2 from "../assets/tabla.png";
import foto3 from "../assets/plato.png";
import foto4 from "../assets/textdemo.jpg";
import Globals from "../Globals";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export class home extends Component {
  render() {
    return (
      <React.StrictMode>
        <Zoom>
          <ImageContainer link={logo}></ImageContainer>
        </Zoom>
        <Background />
        <br></br>
        <br></br>
        <Zoom>
          <ImageContainer link={logo}></ImageContainer>
        </Zoom>
        <TextContainer text={Globals.textHome}></TextContainer>
        <br></br>
        <br></br>
        <Fade left>
          <TextImgL imagen={foto1} titulo="Fácil de usar" parrafo={Globals.txt1}></TextImgL>
        </Fade>
        <Fade right>
          <TextImgR imagen={foto2} titulo="Variedad de Cálculos" parrafo={Globals.txt2}></TextImgR>
        </Fade>
        <Fade left>
          <TextImgL imagen={foto4} titulo="Porciones personalizadas" parrafo={Globals.txt3}></TextImgL>
        </Fade>
        <Fade right>
          <TextImgR imagen={foto3} titulo="Todo tipo de alimentos" parrafo={Globals.txt4}></TextImgR>
        </Fade>

      </React.StrictMode>
    );
  }
}

export default home;
