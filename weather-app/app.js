const request = require('request');

const url =
  'http://api.weatherstack.com/current?access_key=9d9a0af23eff718899fc101ad063adeb&query=New York';
request({ url: url, json: true }, (error, response) => {
  // console.log(response.body.current);
  console.log(
    `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
  );
});

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoiay1lcmEiLCJhIjoiY2wyenIzamkxMDJ5ejNjcHJjcDZ3cmdlaiJ9._h2ZHWzfRYmzu5_Zgyrg2w';
request({ url: geocodeURL, json: true }, (error, response) => {
  const lattitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(lattitude, longitude);
});

// console.log('Starting');

// setTimeout(() => {
//   console.log('2 Second Timer');
// }, 2000);

// setTimeout(() => {
//   console.log('0 Second Timer');
// }, 0);

// console.log('Stopping');
