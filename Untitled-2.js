var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
  params: {word: 'brave'},
  headers: {
    'X-RapidAPI-Key': '87abc3cbd9msha1f235df0894670p1ef4b3jsnb57fb4ce702a',
    'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});