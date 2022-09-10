const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      // console.log('ERROR >>');
      // console.log(error);
      // return;
    }
  
    const data = JSON.parse(body);
  
    if (data.length === 0) {
      console.log('Breed not found.');
      return;
      // callback(error, null);
    }
  
    callback(null, data[0].description);
    // return data[0];
  })
}

module.exports = fetchBreedDescription;