var isArray = function(a) {
  return (!!a) && (a.constructor === Array);
};

module.exports = isArray;