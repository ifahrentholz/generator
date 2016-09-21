var checkEmpty = function(directory) {
  var _files = fso.readdirSync(directory);
  if(_files.length > 0) {
    if(_files.length === 1 && _files[0] === '.DS_Store') {
      return true;
    }
    return false;
  }
  return true;
};

module.exports = checkEmpty;