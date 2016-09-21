var fso = require("fs");

var checkDir = function(dir) {
  try {
    fso.statSync(dir);
    return true;
  } catch(e) {
    return false;
  }
};

module.exports = checkDir;