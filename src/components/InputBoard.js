import React, { Component } from "react";
import "./InputBoard.css";
import ContentEditable from "react-contenteditable";

export class InputBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      html: "Edit <b>me</b> !",
    };
  }
  handleCallback = (childData) => {
    this.setState({ data: childData });
  };

  onTrigger = (event) => {
    this.props.parentCallback(this.state.html);
    event.preventDefault();
  };
  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };
  //Clase para
  render() {
    return (
      <div>
        <ContentEditable
          className="board"
          html={this.state.html}
          disabled={false} // use true to disable edition
          onChange={this.handleChange}
        ></ContentEditable>
        <button onClick={this.onTrigger}>Aceptar</button>
      </div>
    );
  }
}

export default InputBoard;
