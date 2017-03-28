var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname)));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const translateToEnglish = (query) => {
  console.log(query);
  translate(query.text, {to: query.translatedLang}).then(res => {
    return res.text
  }).catch(err => {
    console.error(err);
  });
};

app.get('/translate', function(req, res) {
  query = {
    text : req.params('text'),
    translatedLang = req.params('lang')
  }
  return translateToEnglish(query)
});
