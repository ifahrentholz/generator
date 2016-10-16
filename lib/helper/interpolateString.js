var interpolateString = function(interpolationIdentifier, string, text) {
  if(string.indexOf(interpolationIdentifier) === -1) {
    return string;
  }

  return string.replace("%cName%", text);
};

module.exports = interpolateString;