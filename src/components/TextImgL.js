import React, { Component } from 'react'
import "./TextImg.css";

export class TextImgL extends Component {
    render() {
        return (
            <React.StrictMode>
                <div class="grid-container">
                        <div className="column" id="texto">
                            <div className="split-item-content">
                                <h3 className="mt-0 mb-12" id="left">
                                    {this.props.titulo}
                                </h3>
                                <p className="m-0" id="left">
                                    {this.props.parrafo}
                                </p>
                            </div>
                        </div>
                        <div className="column">
                            <img src={this.props.imagen}></img>
                        </div>
                </div>
            </React.StrictMode>
        )
    }
}

export default TextImgL
