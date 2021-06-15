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
        return (
          <div
            key={recipe.id}
            className="col-md-5"
            style={{ marginBottom: "2rem" }}
          >
            <div className="recipes__box">
              <button onClick={() => handleClick(props, rawIngredients)}>
                Search data about this recipe
              </button>
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.name.length < 20
                    ? `${recipe.name}`
                    : `${recipe.name.substring(0, 25)}...`}
                </h5>
                <p className="recipes__subtitle">
                  Ingredients: <span>{ingredients}</span>
                </p>
                <p className="recipes__subtitle">
                  <p>Instrucciones:</p>
                  <span>{recipe.instructions}</span>
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
