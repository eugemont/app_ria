import { data } from "jquery";
import React, { Component, useState, useEffect } from "react";
import Recipes from "../components/recipe";
import "../components/InputBoard.css";
import "../components/ButtonStyle.css";

import ContentEditable from "react-contenteditable";

export class Calories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      foodList: [],
    };
    this.getData = this.getData.bind(this);
    this.buscarReceta = this.buscarReceta.bind(this);
    this.cargarBoton = this.cargarBoton.bind(this);
  }

  buscarReceta = () => {
    console.log(this.state.data);
    let data = this.state.data;
    let searchedRecipe = [];
    let words = document.getElementById("searchdata").value;
    data.map((item, index) => {
      let isAdded = false;

      item["ingredients"].map((ingredient, index2) => {
        let cant = ingredient.search(words);
        if (cant == words.length) {
          searchedRecipe.push(item);
          isAdded = true;
        }
      });
      if (!isAdded) {
        let cant2 = item["name"].search(words);
        console.log(item["name"]);
        if (cant2 == words.length) {
          searchedRecipe.push(item);
        }
      }
    });
    console.log(searchedRecipe);
    this.setState({
      foodList: (
        <Recipes
          recipes={searchedRecipe}
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

  cargarBoton() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const body = document.body;

    const elButton = document.querySelector(".treat-button");
    const elWrapper = document.querySelector(".treat-wrapper");

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const treatmojis = [
      "🍌",
      "🥑",
      "🥦",
      "🍎",
      "🍋",
      "🥯",
      "🍗",
      "🥓",
      "🧇",
      "🍕",
      "🍝",
      "🌭",
      "🍪",
      "🍩",
      "🧁",
      "🥟",
      "🍤",
      "🥗",
      "🥪",
      "🍳",
      "🍔",
      "🥒",
      "🍉",
      "🌽",
    ];
    const treats = [];
    const radius = 15;

    const Cd = 0.47; // Dimensionless
    const rho = 1.22; // kg / m^3
    const A = (Math.PI * radius * radius) / 10000; // m^2
    const ag = 9.81; // m / s^2
    const frameRate = 1 / 60;

    function createTreat() /* create a treat */ {
      const vx = getRandomArbitrary(-10, 10); // x velocity
      const vy = getRandomArbitrary(-10, 1); // y velocity

      const el = document.createElement("div");
      el.className = "treat ";

      const inner = document.createElement("span");
      inner.className = "inner";
      inner.innerText = treatmojis[getRandomInt(0, treatmojis.length - 1)];
      el.appendChild(inner);

      elWrapper.appendChild(el);

      const rect = el.getBoundingClientRect();

      const lifetime = getRandomArbitrary(2000, 3000);

      el.style.setProperty("--lifetime", lifetime);

      const treat = {
        el,
        absolutePosition: { x: rect.left, y: rect.top },
        position: { x: rect.left, y: rect.top },
        velocity: { x: vx, y: vy },
        mass: 0.1, //kg
        radius: el.offsetWidth, // 1px = 1cm
        restitution: -0.7,

        lifetime,
        direction: vx > 0 ? 1 : -1,

        animating: true,

        remove() {
          this.animating = false;
          this.el.parentNode.removeChild(this.el);
        },

        animate() {
          const treat = this;
          let Fx =
            (-0.5 *
              Cd *
              A *
              rho *
              treat.velocity.x *
              treat.velocity.x *
              treat.velocity.x) /
            Math.abs(treat.velocity.x);
          let Fy =
            (-0.5 *
              Cd *
              A *
              rho *
              treat.velocity.y *
              treat.velocity.y *
              treat.velocity.y) /
            Math.abs(treat.velocity.y);

          Fx = isNaN(Fx) ? 0 : Fx;
          Fy = isNaN(Fy) ? 0 : Fy;

          // Calculate acceleration ( F = ma )
          var ax = Fx / treat.mass;
          var ay = ag + Fy / treat.mass;
          // Integrate to get velocity
          treat.velocity.x += ax * frameRate;
          treat.velocity.y += ay * frameRate;

          // Integrate to get position
          treat.position.x += treat.velocity.x * frameRate * 100;
          treat.position.y += treat.velocity.y * frameRate * 100;

          treat.checkBounds();
          treat.update();
        },

        checkBounds() {
          if (treat.position.y > height - treat.radius) {
            treat.velocity.y *= treat.restitution;
            treat.position.y = height - treat.radius;
          }
          if (treat.position.x > width - treat.radius) {
            treat.velocity.x *= treat.restitution;
            treat.position.x = width - treat.radius;
            treat.direction = -1;
          }
          if (treat.position.x < treat.radius) {
            treat.velocity.x *= treat.restitution;
            treat.position.x = treat.radius;
            treat.direction = 1;
          }
        },

        update() {
          const relX = this.position.x - this.absolutePosition.x;
          const relY = this.position.y - this.absolutePosition.y;

          this.el.style.setProperty("--x", relX);
          this.el.style.setProperty("--y", relY);
          this.el.style.setProperty("--direction", this.direction);
        },
      };

      setTimeout(() => {
        treat.remove();
      }, lifetime);

      return treat;
    }

    function animationLoop() {
      var i = treats.length;
      while (i--) {
        treats[i].animate();

        if (!treats[i].animating) {
          treats.splice(i, 1);
        }
      }

      requestAnimationFrame(animationLoop);
    }

    animationLoop();

    function addTreats() {
      //cancelAnimationFrame(frame);
      if (treats.length > 40) {
        return;
      }
      for (let i = 0; i < 70; i++) {
        treats.push(createTreat());
      }
    }

    elButton.addEventListener("click", addTreats);
    elButton.click();

    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
    });
  }

  componentDidMount() {
    this.getData(this);
    this.cargarBoton();
  }
  render() {
    return (
    <div
      className="center-board"
      style={{
        width: "100%",
        height: "100%",
        "padding-right": "15%",
        "padding-left": "15%",
      }}>
      <input id="searchdata" className="board" style={{"text-align":"center"}}></input>
      <div className="treat-wrapper">
        <button onClick={this.buscarReceta} className="treat-button">Buscar</button>
      </div>
      {this.state.foodList}
      </div>

    );
  }
}

export default Calories;
