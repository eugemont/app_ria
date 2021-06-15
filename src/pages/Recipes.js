import { data } from "jquery";
import React, { Component, useState, useEffect } from "react";
import Recipes from "../components/recipe";

export class Calories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      foodList: [],
    };
    this.getData = this.getData.bind(this);
    this.buscarReceta = this.buscarReceta.bind(this);
  }

  buscarReceta = () => {
    console.log(this.state.data);
    let data = this.state.data;
    let searchedRecipe = [];
    let words = document.getElementById("searchdata").value;
    data.map((item, index) => {
      item["ingredients"].map((ingredient, index2) => {
        let cant = ingredient.search(words);
        if (cant == words.length) {
          searchedRecipe.push(item);
        }
      });
    });

    this.setState({
      foodList: (
        <Recipes
          recipes={data}
          menu={this.props.menu}
          inputData={document.getElementById("searchdata").value}
        />
      ),
    });
  };
  handleChange(e) {
    console.log(this, "change");
    this.setState({ [e.target.name]: e.target.value });
  }

  getData = (component) => {
    console.log("obteniendo data");
    fetch("recipes.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        var tifOptions = [];
        let data = myJson;
        Object.keys(data).forEach(function (key) {
          tifOptions.push(data[key]);
        });

        component.setState({ data: tifOptions });
      });
  };

  componentDidMount() {
    this.getData(this);
  }
  render() {
    return (
      <div>
        <input id="searchdata"></input>
        <button onClick={this.buscarReceta}>Buscar</button>
        {this.state.foodList}
      </div>
    );
  }
}

export default Calories;
