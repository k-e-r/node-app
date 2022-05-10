const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9d9a0af23eff718899fc101ad063adeb&query=New York';

request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  console.log(
    `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});

// console.log('Starting');

// setTimeout(() => {
//   console.log('2 Second Timer');
// }, 2000);

// setTimeout(() => {
//   console.log('0 Second Timer');
// }, 0);

// console.log('Stopping');
