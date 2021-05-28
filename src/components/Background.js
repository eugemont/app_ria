import React, { Component } from 'react';
import "./Background.css";

export default class Background extends Component {
    render() {
        return (
            <img src={this.props.link}></img>
        )
    }
}
