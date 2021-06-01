import React, { Component } from "react";
import MenuItem from "./MenuItem";
import "./MenuContainer.module.css";

import * as $ from "jquery";

/*
Menu que contiene las opciones, las opciones son los items 

*/

class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
    this.handleCounter = this.handleCounter.bind(this);
  }

  tooggleTitle = () => {
    if (this.state.title === "") {
      this.setState({ title: "React state example" });
    } else {
      this.setState({ title: "" });
    }
  };
  handleCounter(_State) {
    console.log(this.state);
    this.state.selected(_State);
  }
  render() {
    //Carga los items del menu
    let itemList = this.props.items.map((item, index) => {
      return (
        <MenuItem
          key={"item" + index}
          id={index}
          name={item.name}
          page={item.page}
          handleCounter={this.handleCounter}
        ></MenuItem>
      );
    });

    return (
      <React.StrictMode>
        <ul className="menu">{itemList}</ul>
      </React.StrictMode>
    );
  }
}
export default MenuContainer;
