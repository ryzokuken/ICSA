'use strict';
const request = require('request');

const getWeather = (callback, lat, long) => {
  const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=e5cac30555a8903f7b98baa23edb2732'
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(typeof(JSON.parse(body)));
      return callback(JSON.parse(body));
    }
  });
}

module.exports = {
  getWeather
}
