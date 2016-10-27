export default (string:string, replaceString:string, identifier:string) => {
  if(string.indexOf(identifier) === -1) {
    return string;
  }

  return string.replace(identifier, replaceString);
}