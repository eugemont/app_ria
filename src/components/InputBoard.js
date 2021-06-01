import React, { Component } from "react";
import "./InputBoard.css";
import ContentEditable from "react-contenteditable";

export class InputBoard extends Component {
  //Clase para
  render() {
    return <ContentEditable className="board"></ContentEditable>;
  }
}

export default InputBoard;
