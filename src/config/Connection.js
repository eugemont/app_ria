//var AuthorizationVar = "5bd79d3a420b3a880e1688b0272906af2c8f86a3";
import axios from "axios";

var AuthorizationVar = "N5xIANX5zvuzK2mWLM62bA==wQce0nw8aDB4O0FO";

export const getDataFromText = (ingredientsVar) => {
  return new Promise(function (resolver, rechazar) {
    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: "https://api.calorieninjas.com/v1/nutrition",
      params: { query: ingredientsVar },
      headers: {
        "X-Api-Key": AuthorizationVar,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        resolver(response);
      })
      .catch(function (error) {
        console.error(error);
        rechazar(error);
      });
  });
};
