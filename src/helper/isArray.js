/**
 * Check if the given parameters type is an array.
 * @param a
 * @returns {boolean}
 */
export default (a) => {
  return (!!a) && (a.constructor === Array);
};