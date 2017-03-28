'use strict';
const request = require('request');

const mapState = {
  Dal : 'https://data.gov.in/api/datastore/resource.json?resource_id=f6e6eee2-21f9-4e81-a82c-afd7b8d99f64',
  Salt : 'https://data.gov.in/api/datastore/resource.json?resource_id=7e6249e9-f1cb-4f58-bc7d-c586f9538c04',
  Rice : 'https://data.gov.in/api/datastore/resource.json?resource_id=dae038d5-1e5d-4469-b233-1dd9d04ea3f7'
};

const getFoodPrices = (callback, query) => {
  //console.log(mapState.query);
  var url ='';
  if( query = 'Dal') {
    url = mapState.Dal + '&api-key=15694df88e77c2829f0bf4a870db7b1d';
  }
  else if(query = 'Salt'){
    url = mapState.Salt + '&api-key=15694df88e77c2829f0bf4a870db7b1d';
  }
  else {
    url = mapState.Rice + '&api-key=15694df88e77c2829f0bf4a870db7b1d';
  }
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      return callback(body);
    }
  });
}

module.exports = {
  getFoodPrices
}
