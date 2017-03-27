const translate = require('google-translate-api');
const request = require('request');
const wiki = require('./wiki').wikiService

//log s result from wiki api
const logWikiResult = (message) => {
  console.log(message);
}

//returns Nouns from text and sends it to the Wiki API.
const parseText = (rawText) => {
  console.log(rawText);
   request({
        url: 'http://127.0.0.1:5000/message_parser?query=' + rawText,
        method: 'GET'
      }, (error, response, body) => {
        wiki(logWikiResult, body);
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
