import React from "react";
import "./recipe.css";
import { Calories } from "../../pages";

var onlyOneClick = false;

const handleClick = (props, recipe) => {
  if (!onlyOneClick) {
    console.log("desde el recipes");
    console.log(props);
    console.log(recipe);
    onlyOneClick = true;
    props.menu(<Calories newData={recipe} />);
  }
};

const Recipes = (props) => (
  <div id="contenedor" className="container">
    <div className="row">
      {props.recipes.map((recipe) => {
        let rawIngredients = "";
        let ingredients = recipe.ingredients.map((item, index) => {
          rawIngredients = rawIngredients + "\n" + item;
          return <h6>{item}</h6>;
        });
        onlyOneClick = false;
        let instructions = recipe.instructions.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ));
        return (
          <div
            key={recipe.id}
            className="col-md-5"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <button
                onClick={() => handleClick(props, rawIngredients)}
                id="btn"
              >
                Calcular nutrientes de esta receta
              </button>
              <div className="recipe__text">
                <h5 className="recipes__title">{recipe.name}</h5>
                <p className="recipes__subtitle ingredients">
                  Ingredientes: <span>{ingredients}</span>
                </p>
                <p className="recipes__instructions">
                  <p className="procedimiento">Procedimiento:</p>
                  <h5>{instructions}</h5>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
