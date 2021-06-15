import React, { Component } from 'react'

import Fade from "react-reveal/Fade";

import "./TextImg.css";

export class TextImgL extends Component {
    render() {
        return (
            <React.StrictMode>
                <Fade direction={this.props.direccion}>
                <section className="grilla">
                <div className="grid-container">
                        <div className="column area-2" id="texto">
                            <div className="split-item-content">
                                <h3 className="mt-0 mb-12" id="left">
                                    {this.props.titulo}
                                </h3>
                                <p className="m-0" id="left">
                                    {this.props.parrafo}
                                </p>
                            </div>
                        </div>
                        <div className="column area-1">
                            <img src={this.props.imagen}></img>
                        </div>
                </div>
                </section>
                </Fade>
            </React.StrictMode>
        )
    }
}

export default TextImgL
