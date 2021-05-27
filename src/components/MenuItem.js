import React, { Component } from "react";

export default class MenuItem extends Component {
  render() {
    const { listing, prueba } = this.props;
    return (
      <div>
        <p>Title: {listing}</p>
      </div>
    );
  }
}
