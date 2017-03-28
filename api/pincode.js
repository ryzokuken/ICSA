'use strict';
const request = require('request');

const getPincode = (callback) => {
  const url = 'https://data.gov.in/api/datastore/resource.json?resource_id=7eca2fa3-d6f5-444e-b3d6-faa441e35294&api-key=15694df88e77c2829f0bf4a870db7b1d';
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      return callback(body);
    }
  });
}

module.exports = {
  getPincode
}
