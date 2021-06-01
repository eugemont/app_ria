import React, { Component } from "react";
import "./MenuItem.module.css";
export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      page: this.props.page,
      selected: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateLibraryCount = this.updateLibraryCount.bind(this);
  }

  updateLibraryCount() {
    this.props.handleCounter({ name: this.state.name, page: this.state.page });
  }

  handleClick() {
    this.setState({ selected: true }, this.updateLibraryCount);
  }
  render() {
    console.log(this.props);
    const { name, prueba } = this.props;
    return (
      <li onClick={this.handleClick} data-text={name}>
        {name}
      </li>
    );
  }
}
