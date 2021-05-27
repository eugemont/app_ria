var AuthorizationVar = "5bd79d3a420b3a880e1688b0272906af2c8f86a3";
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
