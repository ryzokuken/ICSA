const translate = require('google-translate-api');
const request = require('request');
const wiki = require('./wiki').wikiService
const pincode = require('./pincode').getPincode
const getWeather = require('./weather').getWeather
//log s result from wiki api
const logResult = (message) => {
  console.log(message);
}

//returns Nouns from text and sends it to the Wiki API.
const parseText = (rawText) => {
  console.log(rawText);
   request({
        url: 'http://127.0.0.1:5000/message_parser?query=' + rawText,
        method: 'GET'
      }, (error, response, body) => {
        //wiki(logWikiResult, body);
        getWeather(logResult, 35, 77);
      });
};
const translateToEnglish = (query) => {
  console.log(query);
  translate(query.text, {to: query.translatedLang}).then(res => {
    parseText(res.text);
  }).catch(err => {
    console.error(err);
  });
};

module.exports = {
  translateToEnglish
};
