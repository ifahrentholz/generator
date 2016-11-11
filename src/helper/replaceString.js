/**
 * Replace an sub string with another string which is identified by the identifier :)
 * @param {string} string
 * @param {string} replaceString
 * @param {string} identifier
 * @returns {string}
 */
export default (string, replaceString, identifier) => {
  if(string.indexOf(identifier) === -1) {
    return string;
  }
  return string.replace(identifier, replaceString);
}