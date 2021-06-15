import React, { Component } from "react";
import CaloriesPanel from "../components/calories/CaloriesPanel";
import InputBoard from "../components/InputBoard";
import { getDataFromText } from "../config/Connection";

import "./Page.module.css";

export class Calories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      foodList: [],
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleCallback = this.handleCallback.bind(this);
  }
  handleCallback = (childData) => {
    this.setState({ data: childData });
  };
  handleOnClick = (childData) => {
    this.setState({ data: childData });
    console.log(childData);
    getDataFromText(childData)
      .then((resultado) => {
        var arrAux = [];
        resultado["data"]["items"].map((item, index) =>
          arrAux.push(
            <CaloriesPanel
              key={index}
              foodName={item["name"]}
              caloria={item["calories"]}
              carbohidrato={item["carbohydrates_total_g"]}
              colesterol={item["cholesterol_mg"]}
              grasSatu={item["fat_saturated_g"]}
              grasTotal={item["fat_total_g"]}
              fibra={item["fiber_g"]}
              potasio={item["potassium_mg"]}
              proteina={item["protein_g"]}
              sodio={item["sodium_mg"]}
              azucar={item["sugar_g"]}
              foodsize={item["serving_size_g"]}
            />
          )
        );

        this.setState({ foodList: arrAux });
        console.log(resultado);
        console.log(this.state.foodList);
      })
      .catch(
        // Registrar la razón del rechazo
        function (reason) {
          console.log("Manejar promesa rechazada (" + reason + ") aquí.");
        }
      );
  };

  render() {
    return (
      <div>
        <InputBoard
          parentCallback={this.handleCallback}
          onClickCallback={this.handleOnClick}
        ></InputBoard>
        <div
          className="page-section container"
          style={{
            top: "50%",
            left: "50%",
            /* bring your own prefixes */
            transform: "translate(10%, -50%)",
            /*
            width: "100%",
            height: "100%",
            "padding-right": "15%",
            "padding-left": "15%",
            */
          }}
        >
          {this.state.foodList}
          
        </div>
      </div>
    );
  }
}

export default Calories;
