const request = require('request');

const wikiService = (callback, input) => {
  let apiOptions = {
    url : 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=4&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + input,
    method : 'GET',
    json : {}
  };
  request(apiOptions, (err, response, data) => {
    if (!err && response.statusCode === 200) {
      let result = '', dataArr = [];
      if (data.query) {
        for(let key in data.query.pages) {
          if (data.query.pages.hasOwnProperty(key)) {
            dataArr[data.query.pages[key].index - 1] = data.query.pages[key]; // counting sort.
          }
        }
      }
      dataArr.forEach((curr, index) => {
        result += `\n#### ${index + 1}. [${curr.title}]('https://en.wikipedia.org/?curid='${curr.pageid})\n${curr.extract}\n`; // eslint-disable-line max-len
      });
      callback(result);
    } else {
      //console.log('error');
      callback(err ? err.message : 'Unable to Connect to Wikipedia');
    }
  });
};

module.exports = {
  wikiService
};
