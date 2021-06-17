import React, { Component } from 'react'

import { getDataFromWikipedia } from "../config/Connection";
import Logo from "../assets/CaloRIA.png";
import TextImgR from "../components/TextImgR";
import "./About.css";

export class About extends Component {
    constructor(props) {
        super(props);
        this.onTrigger = this.onTrigger.bind(this);
    }

    onTrigger(event){
        console.log(event);
        event = event.replace(/\s+/g, '_');
        console.log(event);
        getDataFromWikipedia(event)
        .then((result) => {
            console.log(result);
            console.log(result["data"]);
            var key = Object.keys(result.data.query.pages)[0];
            //console.log(result["data"]["query"]["pages"][key]["extract"]);
            document.getElementById(event).innerHTML = result["data"]["query"]["pages"][key]["extract"];
            //console.log(result["data"][1][0]);
            //console.log(result["data"][3][0]);
        })
    };

    render() {
        return (
            <React.StrictMode>
                <div>
                    <img id="foto" class="responsive" src={Logo}></img>
                    <h2 style={{"margin-bottom": "20px"}}>En esta sección encontrarás información sobre cada uno de los nutrientes de tus alimentos</h2>
                </div>
                <section className="acordiones">
                    <div class="container">
                        <div class="accordion">
                            <div class="accordion-item" id="question1">
                                <a class="accordion-link" href="#question1" onClick={(event) => this.onTrigger("caloría")}>
                                    <div class="flex">
                                    <h3>Calorías</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                    
                                </a>
                                <div class="answer" id="caloría"></div>
                            </div>
                            <div class="accordion-item" id="question2">
                                <a class="accordion-link" href="#question2" onClick={(event) => this.onTrigger("Glúcido")}>
                                    <div class="flex">
                                    <h3>Carbohidratos</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="Glúcido"></div>
                            </div>
                            <div class="accordion-item" id="question3">
                                <a class="accordion-link" href="#question3" onClick={(event) => this.onTrigger("colesterol")}>
                                    <div class="flex">
                                    <h3>Colesterol</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="colesterol"></div>
                            </div>
                            <div class="accordion-item" id="question4">
                                <a class="accordion-link" href="#question4" onClick={(event) => this.onTrigger("grasas saturadas")}>
                                    <div>
                                        <h3>Grasas Saturadas</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="grasas_saturadas"></div>
                            </div>
                            <div class="accordion-item" id="question5">
                                <a class="accordion-link" href="#question5" onClick={(event) => this.onTrigger("Grasa alimentaria")}>
                                    <div>
                                        <h3>Grasas totales</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="Grasa_alimentaria"></div>
                            </div>
                            <div class="accordion-item" id="question6">
                                <a class="accordion-link" href="#question6" onClick={(event) => this.onTrigger("fibra alimentaria")}>
                                    <div>
                                        <h3>Fibras</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="fibra_alimentaria"></div>
                            </div>
                            <div class="accordion-item" id="question7">
                                <a class="accordion-link" href="#question7" onClick={(event) => this.onTrigger("Potasio")}>
                                    <div>
                                        <h3>Potasio</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="Potasio"></div>
                            </div>
                            <div class="accordion-item" id="question8">
                                <a class="accordion-link" href="#question8" onClick={(event) => this.onTrigger("Proteína_(nutriente)")}>
                                    <div>
                                        <h3>Proteínas</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="Proteína_(nutriente)"></div>
                            </div>
                            <div class="accordion-item" id="question9">
                                <a class="accordion-link" href="#question9" onClick={(event) => this.onTrigger("sodio")}>
                                    <div>
                                        <h3>Sodio</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="sodio"></div>
                            </div>
                            <div class="accordion-item" id="question10">
                                <a class="accordion-link" href="#question10" onClick={(event) => this.onTrigger("Sacarosa")}>
                                    <div>
                                        <h3>Azúcares</h3>
                                    </div>
                                    <i class="icon ion-md-arrow-forward"></i>
                                    <i class="icon ion-md-arrow-down"></i>
                                </a>
                                <div class="answer" id="Sacarosa"></div>
                            </div>
                        </div>
                    </div>
                </section>
 
            </React.StrictMode>            

        )
    }
}

export default About
