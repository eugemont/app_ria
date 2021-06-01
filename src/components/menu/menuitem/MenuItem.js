import React, { Component } from "react";

export class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(selectedItem, page) {
    console.log("Ejecuta algo ");
    console.log(page);
    selectedItem(page);
  }

  render() {
    const { name, itemImage, tabIndex, page, setSelection } = this.props;

    return (
      <a
        href="#"
        tabIndex={tabIndex}
        onClick={() => this.selectItem(setSelection, page)}
      >
        <span aria-hidden="true">{itemImage}</span>
        {name}
      </a>
    );
  }
}

export default MenuItem;
