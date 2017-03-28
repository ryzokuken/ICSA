const translateToEnglish = require('./translatelang').translateToEnglish;
const query = {
  text: 'how are you',
  translatedLang : 'en'
};
translateToEnglish(query);
