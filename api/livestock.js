'use strict';
const request = require('request');

const mapState = {
  tripura : 'https://data.gov.in/api/datastore/resource.json?resource_id=c34b34f7-a301-49f5-9219-d35e5a650c39',
  andhra : 'https://data.gov.in/api/datastore/resource.json?resource_id=5d959416-0b9a-42b9-9592-edfaf3edc85c',
};

const getLivestock = (callback, query) => {
  //console.log(mapState.query);
  var url ='';
  if( query = 'tripura') {
    url = mapState.tripura + '&api-key=15694df88e77c2829f0bf4a870db7b1d';
  }
  else {
    url = mapState.andhra + '&api-key=15694df88e77c2829f0bf4a870db7b1d';
  }
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      console.log(body);
      return callback(body);
    }
  });
}

module.exports = {
  getLivestock
}
