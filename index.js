var textAnalysis = require("./Source/textAnalysis.js");
var nGrams = require("./Source/nGrams.js");
var TFIDF = require("./Source/TFIDF.js");

module.exports = {
  ...textAnalysis,
  ...nGrams,
  ...TFIDF,
};
