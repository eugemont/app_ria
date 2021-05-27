import React, { Component } from "react";
import MenuItem from "./MenuItem";

/*
Menu que contiene las opciones, las opciones son los items 

*/
export default class MenuContainer extends Component {
  render() {
    /*
      Diferentes estados del menu
      */
    const [activeItem, setActiveItem] = React.useState("");
    const [activeItemPos, setActiveItemPos] = React.useState(0);
    const [activeItemColor, setActiveItemColor] = React.useState("");

    const createClickHandler = (activeItem) => (e) => {
      e.preventDefault();

      setActiveItem(activeItem);
      setActiveItemPos(document.getElementById(activeItem).offsetTop);
      setActiveItemColor(
        window
          .getComputedStyle(document.getElementById(activeItem))
          .getPropertyValue("background-color")
      );
    };

    /*
    Se crean diferentes menus en base al mapeo de una variable item
    */
    const menuItems = menuItemsOptions.map((item) => (
      <MenuItem item={item} createClickHandler={createClickHandler} />
    ));

    return (
      <div className="menu-container">
        <span
          className="menu-item--active"
          style={{ top: activeItemPos, backgroundColor: activeItemColor }}
        />
        {menuItems}
      </div>
    );
  }
}
