'use strict';
const request = require('request');

const getHospitals = (callback) => {
  const url = 'https://data.gov.in/api/datastore/resource.json?resource_id=37670b6f-c236-49a7-8cd7-cc2dc610e32d&api-key=15694df88e77c2829f0bf4a870db7b1d';
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      return callback(body);
    }
  });
}

module.exports = {
  getHospitals
}
