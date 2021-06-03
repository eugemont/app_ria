import { createGlobalStyle } from "styled-components";

var textHome =
  "Con CaloRIA puedes conocer la información nutricional de todas tus comidas, ¡con tan solo un click!";

var tit1 = "";
var txt1 = "Calcular los nutrientes de tu plato nunca fue tan fácil. Escribe tu receta, nombre del plato o cualquier oración y CaloRIA se encargará de analizar cada uno de los ingredientes por separado";
var txt2 = "Nuestra aplicación ofrece una calculadora de calorías, grasas, colesterol, fibra, sodio, azúcares y proteína";
var txt3 = "Si deseas calcular tus comidas en determinadas porciones puedes agregar cantidades en gramos, tazas, libras o la unidad de medida que desees. \n El valor utilizado por defecto son 100g.";
var txt4 = "No solo calculamos ingredientes individuales, sino también platos completos, platos de tu cadena de restaurantes favorita o artículos de marcas de alimentos";

export default {
  textHome,
  txt1,
  txt2,
  txt3,
  txt4
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    background: #b8e467;
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
  }
  div {
    text-align: center;
  }
  small {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.primaryHover};
    text-decoration: none;
  }
`;
