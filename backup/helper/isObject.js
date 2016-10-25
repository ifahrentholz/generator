var isObject = function(o) {
  return (!!o) && (o.constructor === Object);
};

module.exports = isObject;