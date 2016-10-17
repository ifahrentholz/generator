var interpolateString = function(string, replaceWith, interpolationIdentifier) {
  if(string.indexOf(interpolationIdentifier) === -1) {
    return string;
  }

  return string.replace("%cName%", replaceWith);
};

module.exports = interpolateString;