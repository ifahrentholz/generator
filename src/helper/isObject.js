/**
 * Check if the given parameters type is an object.
 * @param {*} o
 * @returns {boolean}
 */
export default (o) => {
  return (!!o) && (o.constructor === Object);
};

