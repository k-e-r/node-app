const request = require('request');

const forecast = (lat, lon, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=9d9a0af23eff718899fc101ad063adeb&query=' +
    lat +
    ',' +
    lon +
    '&units=f';
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        `It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`
      );
    }
  });
};

module.exports = forecast;
