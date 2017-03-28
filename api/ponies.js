'use strict';
const request = require('request');

const getPonies = (callback) => {
  const url = 'https://data.gov.in/api/datastore/resource.json?resource_id=f197e445-9c66-4702-96b6-c97a8171346a' + '&api-key=15694df88e77c2829f0bf4a870db7b1d';
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      return callback(body);
    }
  });
}

module.exports = {
  getPonies
}
