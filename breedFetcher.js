const request = require('request');

const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
    if (error) {
    console.log('ERROR >>');
    console.log(error);
    return;
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log('Breed not found.');
    return;
  }
  console.log(data[0]);
})