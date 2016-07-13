// var tt                  = require("babylon").tokTypes;
// var tt                  = require("babel-core").acorn.tokTypes;
var convertTemplateType = require("./convertTemplateType");
var toToken = require("./toToken");

module.exports = function (tokens, tt, code) {
  // transform tokens to type "Template"
  convertTemplateType(tokens, tt, code);
  var transformedTokens = tokens.filter(function (token) {
    return token.type !== "CommentLine" && token.type !== "CommentBlock";
  });

  for (var i = 0, l = transformedTokens.length; i < l; i++) {
    transformedTokens[i] = toToken(transformedTokens[i], tt, code);
  }

  return transformedTokens;
};
