//var AuthorizationVar = "5bd79d3a420b3a880e1688b0272906af2c8f86a3";
import axios from "axios";

var AuthorizationVar = "N5xIANX5zvuzK2mWLM62bA==wQce0nw8aDB4O0FO";
function getDataFromText(ingredientsVar) {
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
      console.log(response.data);
      return JSON.parse(response.data);
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
}

export const translateEsToEng = () => {
  const options = {
    method: "POST",
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "accept-encoding": "application/gzip",
      "x-rapidapi-key": "85818f0b28msh8961b0f99739bebp14fddejsnd08d005f7c97",
      "x-rapidapi-host": "google-translate1.p.rapidapi.com",
    },
    data: { q: "Hello, world!", target: "es", source: "en" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
