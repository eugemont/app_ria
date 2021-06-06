import React, { Component } from "react";
import Caracteristic from "./Caracteristic";
import "./CaloriesPanel.css";

export class CaloriesPanel extends Component {
  render() {
    const {
      foodName,
      foodsize,
      caloria,
      carbohidrato,
      colesterol,
      grasSatu,
      grasTotal,
      fibra,
      potasio,
      proteina,
      sodio,
      azucar,
    } = this.props;

    return (
      <div className="card ">
        <div>
          <section className="food-name">{foodName.toUpperCase()}</section>
          <section className="food-size">{foodsize + " gramos"}</section>
          <div className="charts_orb  row">
            <Caracteristic number={caloria} dataname="Calorías" />
            <Caracteristic number={carbohidrato} dataname="Carbohidratos" />
            <Caracteristic number={colesterol} dataname="Colesterol" />
            <Caracteristic
              className="col-sm "
              number={grasSatu}
              dataname="Grasas saturadas"
            />
            <Caracteristic
              className="col-sm "
              number={grasTotal}
              dataname="Grasas totales"
            />
          </div>

          <div className="charts_orb row">
            <Caracteristic
              className="col-sm "
              number={fibra}
              dataname="Fibras"
            />
            <Caracteristic
              className="col-sm "
              number={potasio}
              dataname="Potasio"
            />
            <Caracteristic
              className="col-sm "
              number={proteina}
              dataname="Proteínas"
            />
            <Caracteristic
              className="col-sm "
              number={sodio}
              dataname="Sodio"
            />
            <Caracteristic
              className="col-sm "
              number={azucar}
              dataname="Azucares"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CaloriesPanel;
